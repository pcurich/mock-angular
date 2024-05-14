import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs';

// DEFINE ENUMS
enum Verbs {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

// INCLUDE THEM IN CONST OBJECT TYPE DEFINITION
export const VerbsMap: Record<Verbs, string> = {
  [Verbs.GET]: 'GET',
  [Verbs.POST]: 'POST',
  [Verbs.PUT]: 'PUT',
  [Verbs.PATCH]: 'PATCH',
  [Verbs.DELETE]: 'DELETE',
};

@Component({
  template: '',
})
export class SchemaGeneralPresenter {
  private data: Subject<Record<string, string>> = new Subject();
  public data$: Observable<Record<string, string>> = this.data.asObservable();

  private _formRecord: Record<string, string> = {};
  public form!: FormGroup;

  constructor() {
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      endPoint: new FormControl('/url/usrl', [Validators.required]),
      verb: new FormControl<(typeof VerbsMap)[keyof typeof VerbsMap]>(
        VerbsMap[Verbs.GET],
        [Validators.required]
      ),
      description: new FormControl('HELLO WORLD', [Validators.required]),
    });

    this.form.controls['endPoint'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['endPoint'] = value;
        },
      });

    this.form.controls['verb'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['verb'] = value;
        },
      });

    this.form.controls['description'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['description'] = value;
        },
      });

    this.form.statusChanges
      .pipe(
        debounceTime(300),
        filter((x) => x === 'VALID')
      )
      .subscribe((x) => this.onChange());
  }

  onChange(): void {
    this.data.next(this._formRecord);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs';

@Component({ template: '' })
export class CreateOrUpdatePresenter {
  private data: Subject<Record<string, string>> = new Subject();
  public data$: Observable<Record<string, string>> = this.data.asObservable();

  private _formRecord: Record<string, string> = {};
  public form!: FormGroup;

  constructor() {
    this.makeForm();
  }

  makeForm() {
    this.form = new FormGroup({
      userCode: new FormControl('T10541', [Validators.required]),
      applicationCode: new FormControl('VEDI', [Validators.required]),
      environment: new FormControl('DEV', [Validators.required]),
      email: new FormControl('pcurich@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
    });

    this.form.controls['userCode'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['userCode'] = value;
        },
      });

    this.form.controls['applicationCode'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['applicationCode'] = value;
        },
      });

    this.form.controls['environment'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['environment'] = value;
        },
      });

    this.form.controls['email'].valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this._formRecord['email'] = value;
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

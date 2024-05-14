import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SchemaGeneralPresenter } from './schema-general.presenter';

@Component({
  selector: 'app-schema-general-ui',
  templateUrl: './schema-general.component.html',
  styleUrls: ['./schema-general.component.scss'],
  providers: [SchemaGeneralPresenter],
})
export class SchemaGeneralComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<Record<string, string>>();
  private destroy: Subject<void> = new Subject();

  constructor(private presenter: SchemaGeneralPresenter) {}

  ngOnInit(): void {
    this.presenter.data$.pipe(takeUntil(this.destroy)).subscribe((data) => {
      console.log('object-data :>> ', data);
    });
  }

  get form(): FormGroup {
    return this.presenter.form;
  }

  onSubmit() {
    this.onComplete.next(this.form.value);
    console.log('this.form.value :>> ', this.form.value);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

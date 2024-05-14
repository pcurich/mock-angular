import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CreateOrUpdatePresenter } from './create-or-update.presenter';

@Component({
  selector: 'app-create-or-update-user-ui',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss'],
  providers: [CreateOrUpdatePresenter],
})
export class CreateOrUpdateComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<Record<string, string>>();
  private destroy: Subject<void> = new Subject();

  constructor(private presenter: CreateOrUpdatePresenter) {}

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

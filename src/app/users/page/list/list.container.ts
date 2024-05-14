import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss'],
})
export class ListContainer implements OnInit {
  @ViewChild('dialog') dialog?: HTMLDialogElement;
  users$: Observable<UserModel[]> = this.usersService.getAll();
  user: UserModel = new UserModel();
  private windows = window;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.windows.scroll(0, 0);
  }

  openModal(item: UserModel) {
    console.log('item :>> ', item);
    this.user.applicationCode = item.applicationCode;
    this.user.email = item.email;
    this.user.environment = item.environment;
    this.user.userCode = item.userCode;

    (this.dialog as any).nativeElement.showModal();
  }

  goToCreateUser() {
    this.router.navigate(['/create']);
  }
}

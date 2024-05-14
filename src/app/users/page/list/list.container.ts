import { Component, OnInit } from '@angular/core';
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
  users$: Observable<UserModel[]> = this.usersService.getAll();
  user: UserModel = new UserModel();
  private windows = window;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.windows.scroll(0, 0);
  }

  openModal(item: UserModel) {
    this.user.applicationCode = item.applicationCode;
    this.user.email = item.email;
    this.user.environment = item.environment;
    this.user.userCode = item.userCode;
  }

  goToCreateUser() {
    this.router.navigate(['/create']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-create-or-update',
  templateUrl: './create-or-update.container.html',
  styleUrls: ['./create-or-update.container.scss'],
})
export class CreateOrUpdateContainer {
  constructor(private usersService: UsersService, private router: Router) {}

  onCompleteUser(data: Record<string, string>) {
    console.log('pcurich :>> ', data);
    let model = new UserModel();
    model.applicationCode = data['applicationCode'];
    model.userCode = data['userCode'];
    model.environment = data['environment'];
    model.email = data['email'];

    this.usersService.create(model).subscribe((x) => {
      console.log('object created :>> ', x.body);
      this.router.navigate(['/users']);
    });
  }
}

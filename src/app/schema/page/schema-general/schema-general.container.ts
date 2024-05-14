import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

@Component({
  selector: 'app-schema-general',
  templateUrl: './schema-general.container.html',
  styleUrls: ['./schema-general.container.scss'],
})
export class SchemaGeneralContainer {
  constructor(private schemaService: SchemaService, private router: Router) {}

  onComplete(data: Record<string, string>) {
    console.log('data :>> ', data);
    // let model = new UserModel();s
    // model.applicationCode = data['applicationCode'];
    // model.userCode = data['userCode'];
    // model.environment = data['environment'];
    // model.email = data['email'];
    // this.usersService.create(model).subscribe((x) => {
    //   this.router.navigate(['/users']);
    // });
  }
}

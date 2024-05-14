import { ResourceModel } from 'src/app/shared/model/resource.model';

export class UserModel extends ResourceModel<UserModel> {
  public id: string = '';
  public userCode: string = '';
  public applicationCode: string = '';
  public environment: string = '';
  public email: string = '';

  constructor(model?: Partial<UserModel>) {
    super(model);
    this.id = model?.id!;
    this.userCode = model?.userCode!;
    this.environment = model?.environment!;
    this.applicationCode = model?.applicationCode!;
    this.email = model?.email!;
  }
}

export abstract class ResourceModel<T> {
  public _id?: string;

  constructor(model?: Partial<T>) {
    if (model) {
      console.log('object :>> ', Object.assign(this, model));
      Object.assign(this, model);
      console.log('object :>> ', Object.assign(this, model));
    }
  }

  public toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }
}

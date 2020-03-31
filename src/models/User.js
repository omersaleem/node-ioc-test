import Model from './Model';

export default class User extends Model {
  constructor({firstName, lastName}) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

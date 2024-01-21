export class Participant {
  public name: string;
  public surname: string;
  public email: string;

  constructor(name: string, lastName: string, email: string) {
    this.name = name;
    this.surname = lastName;
    this.email = email;
  }
}

export class User{
  id: number;
  name: string;
  surname: string;
  birthDate: Date;
  deleted: false;
  username: string;
  email: string;
  password: string;

  constructor(id?: number, name?: string, surname?: string, birthDate?: Date, deleted?: false, username?: string, email?: string, password?: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.deleted = deleted;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

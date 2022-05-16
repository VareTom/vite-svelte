export class User {
  email: string;
  password: string;
  isAdmin?: boolean;
  
  constructor(json: any) {
    this.email = json.email;
    this.password = json.password;
    this.isAdmin = json.is_admin;
  }
}

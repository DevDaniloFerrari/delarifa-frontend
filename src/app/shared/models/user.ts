export class User {
    public idUser: number;
    public fullName: string;
    public email: string;
    public password: string;

    constructor(fullName: string, email: string, password: string){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}
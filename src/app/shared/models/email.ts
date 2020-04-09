export class Email {
    public idEmail: number;
    public email: string;
    public subject: string;
    public message: string;

    constructor(email:string, subject: string, message: string){
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
import { Gender, Address, MaritalStatus } from '.';

export class User {
    public idUser: number;
    public fullName: string;
    public birthDate: Date;
    public gender: Gender;
    public email: string;
    public password: string;
    public maritalStatus: MaritalStatus;
    public address: Address;
    public homePhone: string;
    public cellPhone: string;

    constructor(
        fullName: string,
        birthDate: Date,
        gender: Gender,
        email: string,
        password: string,
        maritalStatus: MaritalStatus,
        address: Address,
        homePhone: string,
        cellPhone: string
    ) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.maritalStatus = maritalStatus;
        this.address = address;
        this.homePhone = homePhone;
        this.cellPhone = cellPhone;
    }
}
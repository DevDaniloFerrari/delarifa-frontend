export class Address {
    public street: string;
    public number: string;
    public state: string;
    public city: string;
    public country: string;
    public neighborhood: string;
    public postalCode: string;

    constructor(
        street: string,
        number: string,
        state: string,
        city: string,
        country: string,
        neighborhood: string,
        postalCode: string,
    ) {
        this.street = street;
        this.number = number;
        this.state = state;
        this.city = city;
        this.country = country;
        this.neighborhood = neighborhood;
        this.postalCode = postalCode;
    }
}
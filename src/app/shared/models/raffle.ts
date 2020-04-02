import { Product } from './product';
import { Participant } from '.';

export class Raffle {
    public idRaffle: number;
    public name: string;
    public description: string;
    public product: Product;
    public unitPrice: number;
    public maximumParticipants: number;
    public participants: Array<Participant>;
    public initiated: Date;
    public finished?: Date;
}
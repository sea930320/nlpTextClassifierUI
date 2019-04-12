import { Feitas } from './feitas'

export class Ligacao {
    id: number;
    texto: string;
    data: string;
    status: number;
    created_at: string;
    updated_at: string;
    feitas: Feitas = null;
}
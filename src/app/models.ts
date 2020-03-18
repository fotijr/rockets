export class RocketConfig {
    name: string;
    cost: number;
    /** Low earth orbit payload capability, in kg */
    leo: number;
    /** Geo transfer orbit payload capability, in kg */
    gto: number;
}

export interface Image {
    url: string;
    credit: any;
}

export interface Rocket {
    id: string;
    name: string;
    config: RocketConfig[];
    img: Image;
}


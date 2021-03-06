export class RocketConfig {
    name: string;
    cost: number;
    /** Low earth orbit payload capability, in kg */
    leo: number;
    /** Geo transfer orbit payload capability, in kg */
    gto: number;
}

export interface Image {
    /** Image source URL */
    url: string;
    /** Image photo credit */
    credit: {
        /** Photographer name */
        name: string;
        /** Photo URL credit */
        url: string;
    };
}

export interface Rocket {
    id: string;
    name: string;
    config: RocketConfig[];
    img: Image;
}

export interface Orbit {
    /** Orbit altitude in km */
    altitude: number;
    name: string;
    /** Source of image to show on orbit label */
    img?: string;
    /** Set rendered orbit color */
    color?: string;
}

/**
 * A reference used for familiar comparisons when setting a value
 */
export interface UnitReference {
    /** Reference name */
    name: string;
    /** Reference value */
    value: number;
}

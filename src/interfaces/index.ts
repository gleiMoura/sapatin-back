export interface loginType {
    email: string,
    password: string
};

export interface registerType {
    name: string,
    email: string,
    password: string
};

export interface adressType {
    street: string,
    number: number,
    city: string,
    state: string,
    complement: string
};

export interface productType {
    id: string,
    url: string,
    name: string,
    price: number,
    sizes: string[];
    brand: string,
    description?: string
}
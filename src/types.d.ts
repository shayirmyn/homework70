export interface ISubmit {
    name: string;
    phone: string;
    email: string;
    photo: string;
}

export interface IGet {
    name: string;
    phone: string;
    email: string;
    photo: string;
}

export interface IGet2 {
    id: string;
    name: string;
    phone: string;
    email: string;
    photo: string;
}

export interface IApiGet {
    [id: string]: IGet;
}
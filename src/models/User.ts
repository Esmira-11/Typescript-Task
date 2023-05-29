export interface IUser{
    id:number;
    username:string;
    email:string;
    address: IAddress;
    company: ICompany;
}

export interface IAddress{
    street:string;
    city:string;
}

export interface ICompany{
    name:string;
}
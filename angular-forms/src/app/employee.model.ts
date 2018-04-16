
export interface IEmployee{
    firstname:string,
    lastname:string,
    fullcheck:boolean,
    paymentType:string,
    lang:string
}

export class Employee implements IEmployee{
   constructor(public firstname:string, public lastname:string, public fullcheck:boolean, public paymentType:string, public lang:string) {}
}
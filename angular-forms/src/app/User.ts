export class User {
    email:number;
    password:{
        pwd:string,
        confirm_pwd:string,    
    };
    gender:string;
    term:boolean;
    
    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }

    ngOnInit(){
        
    }

}

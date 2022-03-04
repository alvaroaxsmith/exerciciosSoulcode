interface UserProps {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: number;
    contact: number;
    isAdmin: boolean;
}
class User implements UserProps {

    private _firstName: string = "Alvaro";
    private _lastName: string = "Ferreira";
    private _userName: string = "alva7o";
    private _email: string = "alvaromachadoferreira@hotmail.com";
    private _password: string = "123ijij";
    private _cpf: number = 13413413413;
    private _contact: number = 999999999;
    private _isAdmin: boolean = false;

    public get firstName(){
        return this._firstName;
    }
    public get lastName(){
        return this._lastName;
    }
    public get userName(){
        return this._userName;
    }
    public get email(){
        return this._email;
    }
    public get password(){
        return this._password;
    }
    public get cpf(){
        return this._cpf;
    }
    public get contact(){
        return this._contact;
    }
    public get isAdmin(){
        return this._isAdmin;
    }

    public set firstName(value){
        this._firstName = value;
    }
    public set lastName(value){
        this._lastName = value;
    }
    public set userName(value){
        this._userName = value;
    }
    public set email(value){
        this._email = value;
    }
    public set password(value){
        this._password = value;
    }
    public set cpf(value){
        this._cpf = value;
    }
    public set contact(value){
        this._contact = value;
    }
    public set isAdmin(value){
        this._isAdmin = value;
    }
}
let user = new User();
console.log(user.cpf);


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

    firstName: string = "Alvaro";
    lastName: string = "Ferreira";
    userName: string = "alva7o";
    email: string = "alvaromachadoferreira@hotmail.com";
    password: string = "123ijij";
    cpf: number = 13413413413;
    contact: number = 999999999;
    isAdmin: boolean = false;

    constructor(firstName: string, lastName: string, userName: string, email: string, password: string, cpf: number, contact: number, isAdmin: boolean){
  
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
      
      }

    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getUserName(): string {
        return this.userName;
    }
    getEmail(): string {
        return this.email;
    }
    getPassword(): string {
        return this.password;
    }
    getCpf(): number {
        return this.cpf;
    }
    getContact(): number {
        return this.contact;
    }
    getIsAdmin(): boolean {
        return this.isAdmin;
    }

    setFirstName(value: string){
        this.firstName = value;
    }
    setLastName(value:string){
        this.lastName = value;
    }
    setUserName(value:string){
        this.userName = value;
    }
    setEmail(value:string){
        this.email = value;
    }
    setPassword(value:string){
        this.password = value;
    }
    setCpf(value:number){
        this.cpf = value;
    }
    setContact(value:number){
        this.contact = value;
    }
    setIsAdmin(value:boolean){
        this.isAdmin = value;
    }
}
let user: User = new User ( 
    'Alvaro',
    'Ferreira',
    'alva7o',
    'alvaromachadoferreira@hotmail.com',
    '123ijij',
    13413413413,
    999999999,
    false
);

user.setCpf(12312312312)

console.log(user.getFirstName());
console.log(user.getLastName());
console.log(user.getUserName());
console.log(user.getEmail());
console.log(user.getPassword());
console.log(user.getCpf());
console.log(user.getContact());
console.log(user.getIsAdmin());

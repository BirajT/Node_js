export function simple(p,t,r){
    return ((p*t*r)/100)
}

export class Student{
    name
    age
    address

    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    display()
    {
        console.log("Name = ",this.name);
        console.log("Age = ",this.age);
        console.log("Address = ",this.address);
    }
    
}

export class Bank{
    name
    address
    balance

    constructor(name,address,balance){
        this.name=name
        this.balance=balance
        this.address=address
    }
    deposit(amount)
    {
        this.balance=this.balance+amount;
    }
    withdraw(amount)
    {
        this.balance=this.balance-amount;
    }
    getBalance()
    {
        console.log("Your balance is ",this.balance);
    }
    getinfo()
    {
        console.log("Name = ",this.name);
        console.log("Address = ",this.address);
        console.log("Balance = ",this.balance);
    }


}
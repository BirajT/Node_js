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
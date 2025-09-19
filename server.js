import {Bank,simple,Student} from "./math.js"
console.log("Simple Interest = ",simple(1,2,100));

let Stu1=new Student("Biraj",20,"Attarkhel")
let Stu2=new Student("Araj",19,"Bhaktapur")
Stu1.display()
Stu2.display()

//create a module BankAccount.ts with:
// deposit(amount:number)
// withdraw(amount:number)
// getBalance()
// Import it in main.ts and simulate transactions.

let acc1=new Bank("Biraj","Kathmandu",500)
acc1.deposit(1000)
acc1.withdraw(500)
acc1.getBalance()
acc1.getinfo()

/*class User {
    static count=0;
    constructor(id,username,salary){
    this.i=id;
    this.u=username||"unknown";
    this.s=salary<6000 ? salary+500:salary;
   // User.count++;
    this.msg=function(){
        return `hello ${this.u} your salary is ${this.s}`
    };
}
    writemsg() {
        return `hello ${this.u} your salary is ${this.s}`;
    };
    updatename(newname){
        this.u=newname;
    }
    static cmems(){
        return`we have ${this.count} members`
    }
} */
//let userone=new User(100,"elzero",5000)
//let usertwo=new User(101,"",6000)
//let userthree=new User(102,"hassan",7000)
//userone.updatename("osama")
//console.log(userone.u)
//console.log(usertwo.u)
//console.log(userone.count)
//console.log(User.count)
//console.log(User.cmems())
//console.log(userone instanceof User)
//console.log(userthree.msg())
//console.log(userthree.writemsg())
/*
===
const userone={
    id:100,
    username:"elzero",
    salary:5000
}
const usertwo={
    id:101,
    username:"hassan",
    salary:6000
}
const userthree={
    id:102,
    username:"sayed",
    salary:7000
}*/
//parent
/*class User {
    constructor(id,username,salary){
    this.i=id;
    this.u=username||"unknown";
    }
    sayhello(){
        return`hello ${this.u}`
    }
}*/
//derived
/*class admin extends User {
    constructor(id,username,permission){
   super(id,username)
    this.p=permission;
    }
}*/
//let userone=new User(100,"elzero")
// admin1=new admin(110,"mahmoud",1)
//console.log(admin1.i)
/*class User {
    #e;
    constructor(id,username,esalary){
    this.i=id;
    this.u=username||"unknown";
    this.#e=esalary;
    }
    getsalary(){
        return parseInt(this.#e)
    }
}
let userone=new User(100,"elzero","800 pounds")
console.log(userone.getsalary())
console.log(userone)
let m="hi"
console.log(User.prototype)
User.prototype.sayhello=function(){
    return`welcome ${this.u}`;
};
Object.prototype.love="elzero web school"
String.prototype.a=function(b){
    return`.${this}.`
}
let mys="elzero"*/
/*const myo={
    a:1,
    b:2
};
Object.defineProperty(myo,"c",{
    writable:true,
    enumerable:true,
    value:8
    configurable:true,
});
myo.c=5
for (let prop in myo){
    console.log(prop, myo[prop])
}
console.log(delete myo.c)
console.log(myo)*/
/*const myo={
    a:1,
    b:2
};
Object.defineProperties(myo,{c:{
    configurable:true,
    value:3
},
d:{
    configurable:true,
    value:4
},
e:{
    configurable:true,
    value:5
}
})
console.log(myo)
console.log(Object.getOwnPropertyDescriptors(myo))
console.log(Object.getOwnPropertyDescriptor(myo,"d"))*/
//1
/*class syntax{
    constructor(name,model,price){
        this.n=name,
        this.m=model,
        this.p=price
    }
    run(){
        return`car is running now`
    }
    stop(){
        return`car is stopped`
    }
}
let car1=new syntax("racer1",2020,420000)
let car2=new syntax("racer2",2000)
let car3=new syntax("racer3",2017)
console.log(`car one name is ${car1.n} and model is ${car1.m} and price is ${car1.p}`)
console.log(car1.run())*/
//2
/*class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  class Tablet extends Phone {
    constructor(name, serial, price,size) {
        super(name,serial,price)
      this.size=size||"unknown"
    }
    fullDetails(){
        return`${this.name} serial is ${this.serial} and size is ${this.size}`
            }
  }
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown*/
  // Edit The Class
  //3
  /*let reg=/\d{4}/ig;
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
   this.showData=`hello ${this.u} your credit card number is ${this.#c.toString().match(reg).join("-")}`
}
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined*/
  // Write Your Code Here
  //4
 /* String.prototype.addLove=function(){
    return`I love ${this} web school`
  }
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School*/
//5
/*const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  // Write Your Code Here
delete myObj.country
Object.defineProperty(myObj,'id',{
    enumerable:false
})
Object.defineProperty(myObj,'score',{
    configurable:false,
    writable:false
})
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
console.log(myObj);*/
/*import sayhello,{a, arr as r} from"./seventeen.js";
console.log(a)
console.log(r)
console.log(sayhello())*/
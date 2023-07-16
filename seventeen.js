/*let date=new Date()
console.log(date)
console.log(`the milliseconds are ${Date.now()}`)
let seconds=Math.round((Date.now()/1000));
console.log(`the seconds are ${seconds}`)
let minutes=Math.round(seconds/60)
console.log(`the minutes are ${minutes}`)
let hours=Math.round(minutes/60)
console.log(`the hours are ${hours}`)
let days=Math.round(hours/24)
console.log(`the days are ${days}`)
let weeks=Math.round(days/7)
console.log(`the weeks are ${weeks}`)
let years=Math.round(days/365.25)
console.log(`the years are ${years}`)
let decades=years/10
console.log(`the decades are ${decades}`)*/
/*let birthday=new Date("feb 1, 2008")
let date=new Date()
let dateofme=date-birthday
console.log(parseFloat(dateofme/1000/60/60/24/365.25))
console.log(date)
console.log(date.getTime())*/
/*let date1=new Date()

date1.setTime(1000)

date1.setDate(32)

date1.setFullYear(2020,11)
console.log(date1)*/
//console.log(Date.parse("feb 1, 2008"))
/*let start=new Date()
for(let i=0;i<10000;i++){
    document.write(`<div>${i}</div>`)
}
let end=new Date()
let duration=end-start
console.log(duration)*/
/*function* generatenums(){
    yield 1;
    console.log("hello")
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let generator=generatenums();
console.log(generator)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
for (let value of generatenums()){
    console.log(value)
}*/
/*function* generatenums(){
    yield 1;
    yield 2;
    yield 3;
}
function* generateletters(){
    yield "a";
    yield "b";
    yield "c";
}
function* generateall(){
    yield* generatenums();
    yield* generateletters();
    yield* [4,5,6]
}
let generator=generateall()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.return("k").value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)*/
//function* generatenums(){
    /*yield 1;
    yield 2;
    return(8);
    yield 3;
    yield 4;*/
 /*   let i=0;
    while(true){
        yield i++;
    }
}
let generator=generatenums()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)*/
/*export let a=9;
export let arr=[1,2,3,4];
export default function sayhello(){
    return `hello`;
}*/
//1
/*let d="jan 15 1973"
let birthday=new Date(d)
console.log(birthday.getDay())
let date =new Date()
let product=date-birthday;
console.log(`the milliseconds are ${product}`)
let seconds=Math.round((product/1000));
console.log(`the seconds are ${seconds}`)
let minutes=Math.round(seconds/60)
console.log(`the minutes are ${minutes}`)
let hours=Math.round(minutes/60)
console.log(`the hours are ${hours}`)
let days=Math.round(hours/24)
console.log(`the days are ${days}`)
let weeks=Math.round(days/7)
console.log(`the weeks are ${weeks}`)
let months=Math.round(days/30)
console.log(`the monthss are ${months}`)
let years=parseFloat(days/365.25)
console.log(`the years are ${years}`)
let decades=years/10
console.log(`the decades are ${decades}`)*/
//2
/*let date = new Date()
date.setTime(1000)
date.setFullYear(1980,0,1)
console.log(date)*/
//3
/*let date = new Date()
date.setDate(0)
console.log(date)
let d=date.getMonth()
if (d=11){
    d="december"
}
let d2=date.getDate()
console.log(`the last month is ${d} and the last day of it is ${d2}`)*/
//5
/*let s1=performance.now()
for (let i=0;i<10000;i++){
    console.log(i)
}
let s=performance.now()
console.log(`it takes ${s-s1}`)*/
//6
// Write Your Generator Function Here
/*function* gen(){
    yield 14;
    yield 154;
    yield 494;
    yield 1034;
    yield 1774;
    yield 2714;
    yield 3854;
    yield 5194;
    yield 6734;
    yield 14;
}
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}*/
//7
/*function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  let g=genNumbers()
  let g1=genLetters()
  // Write Your Generator Function Here
  let set=new Set(g)
  let set1=new Set(g1)
  function* genAll(){
    yield* set;
    yield* set1;
  }
  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}*/
  //8
  
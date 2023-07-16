/*console.log(11 == "11")
console.log(11 != "11")
console.log(11 !== "11")
console.log(11 === "11")
console.log(11 < 21)
console.log(11 > 21)
console.log(11 <= 21)
console.log(11 >= 21)
console.log(typeof "pp" === typeof "io")*/
/*console.log(true);
console.log(!true);
console.log(10 == "10" && 10 > 3 && 10 > 34)
console.log(10 == "10" || 10 > 3 || 10 > 34)*/
/*let price = 100;
let discount = !true;
let discountamount = 20;
let country = "Egypt";
let student = true;
if (discount == true){
    price -= discountamount;
}else if(country == "Egypt"){
    if (student == true){
        price -= 40
    }
    else{
        price -= 30
    }
}
else{
    price -= 10
}
console.log(price);*/
/*let Name = "mahmoud"
let age = 30;
let gender = "male"
if (gender === "male"){
    console.log("Mr")
}else{
console.log("Mrs")
}
gender === "male" ? console.log("Mr") : console.log("Mrs");
let result = gender === "male" ? "Mr" : "Mrs";
document.write(result)
console.log(gender === "male" ? "Mr" : "Mrs");
console.log(`hello ${gender === "male" ? "Mr" : "Mrs"} ${Name}`)
age < 20 ? console.log("less than 20") : age >20 && age < 60 ? console.log("20 to 60") :age >=60 ? console.log("more than 60"): console.log("undefined")*/
//let price = 9;
//console.log(`the price is ${price || 100}`)
//let a = 10;
//a < 10 ? console.log(10): a>=10 && a<=40 ? console.log("10 to 40") : a>40 ? console.log("> 40"): console.log("unknown")
/*let st = "ElzerW eb School"
if(typeof"st"=== typeof"34"){
    console.log("good")
}
if(typeof"st"=== typeof"W"){
    console.log("good")
}
if("st"!== "string"){
    console.log("good")
}*/
/*let day = 2;
switch(day){
default:
    console.log("unknown day");
    break;
    case 1:
        case 0:
        console.log("saturday")
        break;
        case 2:
            console.log("sunday")
            break;
}*/
/*let job = "It";
let salary = 4000;
switch(job){
    case "manager":
        salary = 8000
        console.log(`${salary}`)
        break;
        case "It":
            case "support":
                salary=6000
                console.log(`${salary}`)
                break;
        case "developer":
            case "designer":
                salary=7000
                console.log(`${salary}`)
                break;
                default:
                console.log(`${salary}`)
                break;
}*/
/*let holidays = 0
let money = 0
if (holidays === 0){
    money = 5000
}else if(holidays === 1 || holidays === 2){
    money = 3000
}else{
    money = 1000;
}
console.log(`${money}`)*/
/*console.log(+100 == "100")
console.log(100 != 1000 !=10)
console.log(-50 <= +"-40")
console.log(-20 != false)*/
/*let a=20
let b=30
let c=10
console.log(a<b && a > c || a != b)
console.log( (a <= b) && (a != b) && (a > c) && (a !== c))*/
//let num=9
//let num=20
/*let num=110
if (num<10){
    console.log(`00${num}`)
}else if(10<num && num<100){
    console.log(`0${num}`)
}else{
    console.log(`${num}`)
}*/
let day=" saturday"
if (day.includes(" ")){
    day = day.trim(" ")
}
if (day[0].toLowerCase() == day[0]){
    day=day[0].toUpperCase() + day.slice(1,day.length - 0).toLowerCase()
    console.log(day)
}console.log(day)
switch(day){
    case "Friday":
        case "Saturday":
            case "Sunday":
            document.write("No Appointments Available")
            break;
    case "Monday":
        case "Thursday":
document.write("From 10:00 AM To 5:00 PM")
break;
case "Wednwsday":
    document.write("From 10:00 AM To 7:00 PM")
    case "Tuesday":
        document.write("From 10:00 AM To 6:00 PM")
        default :
        document.write("It is not a valid day")
}

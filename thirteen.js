
//let myfriends=["sd","df","se"];
/*b="l"
let [a, ,c]=myfriends
console.log(a)
console.log(b)
console.log(c)*/
/*let myfriends=["sara","dana","sayed",["shady","amr",["mohamed","gamal"]]];
let [ , , , [a, , [ , b]]]=myfriends
console.log(a)
console.log(b)*/
/*let book="video";
let video="book";*/
/*let box=book;
book=video;
video=box*/
//[book,video]=[video,book]
/*console.log(book)
console.log(video)*/
/*const user={
    thename:"osama",
    theage:"34",
    thetitle:"developer",
    thecountry:"Egypt",
    skills:{
        html:40,
        css:90
    }
};*/
/*console.log(user.theage)
console.log(user.thecountry)
console.log(user.thename)
console.log(user.thetitle)*/
//({thename,theage,thecountry,thetitle})=user;
/*const {thename:a,theage,thetitle,skills:{html:h,css:c}}=user;
console.log(theage,a)
console.log(`my html progress is ${h}`)
const{html:skillone,css:skilltwo}=user.skills
console.log(`my css progress is ${skilltwo}`)*/
/*const user={
    thename:"osama",
    theage:"34",
    skills:{
        html:40,
        css:60
    }
};
showdetails(user);
function showdetails(obj){
console.log(`your name is ${obj.thename}`)
console.log(`your age is ${obj.theage}`)
console.log(`your css progress is ${obj.skills.css}`)
}*/
/*const user={
    thename:"osama",
    theage:"34",
    skills:{
        html:40,
        css:60
    }
};
showdetails(user);
function showdetails({thename,theage:a,skills:{css}} = user){
    console.log(`your name is ${thename}`)
    console.log(`your age is ${a}`)
    console.log(`your css progress is ${css}`)
};*/
/*const user={
    thename:"osama",
    theage:29,
    skills:["html","css","javascript"],
    adresses:{
        egypt:"giza",
        ksa:"gada"
    }
};
const {thename:n,theage:a,skills:[one, ,three],adresses:{egypt:e,ksa:k}}=user;
console.log(`your name is ${n}`)
console.log(`your age is ${a}`)
console.log(`your skills are ${one}, ${three}`)
console.log(`your live is ${k}`)*/
//1
/*let numbers=[1,2,3,4,5];
[a,b,c,d,e]=numbers
console.log(a*e)*/
//2
/*let skills=["html","css","javascript",["php","python",["java","c++"]]]
let [a,b,c,[d,e,[f,g]]]=skills
console.log(`my skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f} ,${g}`)*/
//3
/*let arr1=["ahmed","yfo","yrfu"]
let arr2=["ahun","yfouy","yrfp"]
let arr3=["ahmedyjfyj","shahy","mahmoud"]
let [c, ,h]=arr1
let [o,a,b]=arr3
console.log(`my best friends: ${a}, ${b}, ${c}`)*/
//4
/*const member={
    age:29,
    working:false,
    country:"egypt",
    hobbies:["reading","swimming","programming"]
};
let {age:a,working:w,country:c,hobbies:[h1,h2,h3]}=member
console.log(`my age is ${a} and I am ${w ? "" : "Not"} working`)
console.log(`I live in ${c}`)
console.log(`my hobbies: ${h1} and ${h3}`)*/
//5
/*const game={
    title:"Ys",
    developer:"falcom",
    releases:{
        "oath in felghana":["usa","japan"],
        "ark of napishtim":{
            us:"20 usd",
            jap:"10 usd",
        },
        origin:"30 usd"
    }
};
let o ="oath in felghana"
let a ="ark of napishtim"
const {title:t,developer:d,releases:{"oath in felghana":[u,j],"ark of napishtim":{us:u_price,jap:j_price},origin:or}}=game;
console.log(`my favourite games style is ${t} style`)
console.log(`and i love${d} games`)
console.log(`my best release is ${o} it released in ${u} & ${j}`)
console.log(`although i love ${a}`)
console.log(`${a} price in usa is ${u_price}`)
console.log(`${a} price in japan is ${j_price}`)
console.log(`origin price is ${or}`)*/
//6
/*let choosen = 3;
let myfriends=[
    {title:"osama", age:39, available:true,skills:["html","css"]},
    {title:"ahmed", age:25, available:false,skills:["python","django"]},
    {title:"sayed", age:33, available:true,skills:["php","laravel"]}
]
if (choosen===1){
const [{title:t1, age:a1, available:av1,skills:[sk1a,sk1b]}, , ]=myfriends
console.log(`${t1}\n${a1}\n${av1 ? "available" : "not available"}\n${sk1b}`)
}
if (choosen===2){
    const [ ,{title:t2, age:a2, available:av2,skills:[sk2a,sk2b]} , ]=myfriends
    console.log(`${t2}\n${a2}\n${av2 ? "available" : "not available"}\n${sk2b}`)
    }
if (choosen===3){
    const [ , , {title:t3, age:a3, available:av3,skills:[sk3a,sk3b]}]=myfriends
    console.log(`${t3}\n${a3}\n${av3 ? "available" : "not available"}\n${sk3b}`)
    }*/
//challenge
/*for (let i = 0;i < 10;i++) {
console.log(i);
}*/
/*document.write("hola")
let myfriends = [2, 3,"ahmed", "mazero", 7,"Elham", "osama", "gamal", "anem"];
let namesonly = [];
/*if (typeof myfriends[0] === "string"){
    namesonly.push(myfriends[0]);
}
if (typeof myfriends[1] === "string"){
    namesonly.push(myfriends[1]);
}
if (typeof myfriends[2] === "string"){
    namesonly.push(myfriends[2]);
}
if (typeof myfriends[3] === "string"){
    namesonly.push(myfriends[3]);
}*/
/*console.log(myfriends[0])
console.log(myfriends[1])
console.log(myfriends[2])
console.log(myfriends[3])
console.log(myfriends[4])*/
/*for (let i = 0;i < myfriends.length;i++) {
    if (typeof myfriends[i] === "string"){
        namesonly.push(myfriends[i]);
    }
    }
    console.log(namesonly)*/
/*let products = ["keyboard","mouse","pen", "pad","monitor"]
let i = 0;
do {
console.log(i);
i++;
}while(false)*/
/*while (index < products.length){
console.log(products[index])
index++;
}*/
/*let colors=["red","blue","green"]
let showcount = 5;
document.write(`<h1>show ${showcount} products</h1`)
for (let i = 0; i < showcount; i++) {
    document.write(`<div>`)
    document.write(`<h3>[${i+1}] ${products[i]}</h3>`)
for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`)
    }
    document.write(`<p>${colors.join(" | ")}</p>`)
    document.write(`</div>`)
}*/
/*let models=[2021, 2022]
mainloop:
for (let i = 0;i < products.length;i++){
    if (typeof products[i] === "number"){
        continue;
    }
    if (products[i] === "pad"){
        break;
    }
    console.log(products[i]);
    nestedloop:for (let j = 0;j < colors.length;j++){
        console.log(`- ${colors[j]}`)
        if (colors[j]==="blue"){
            break nestedloop;
        }
    }
}
        /*for (let i = 0;i < products.length;i++) {
        console.log("#".repeat(10))
        console.log(products[i]);
        console.log("#".repeat(10));
        console.log("colors:  ");
        for(let j=0; j < colors.length;j++){
    console.log(colors[j]);
        }
    }*/
//chalenge
let myadmins = ["ahmed","osama","sama","stop","sayed","samera"]
let myemployees = ["amged", "sameh","ameer","omar","othman", "amany","samia"]
let b=3
s=1
s1=1
s2=1
document.write(`we have ${b} admins<hr>`)

for (let x = 0; x < myadmins.length;x++) {
    if (myadmins[x] === "stop"){
        break;
    }
    document.write(`<div>`)
    document.write(`<div>The Admin of team ${x + 1} is ${myadmins[x]}
</div>`)
document.write(`<h3>Team Members</h3>`)
for (i = 0; i<myemployees.length;i++){
    if(myadmins[x].startsWith("a")&&myemployees[i].startsWith("a")){
    document.write(`<p>-${s++} ${myemployees[i]}`)}
    else if(myadmins[x].startsWith("o")&&myemployees[i].startsWith("o")){
    document.write(`<p>-${s1++} ${myemployees[i]}`)}
    else if(myadmins[x].startsWith("s")&&myemployees[i].startsWith("s")){
        document.write(`<p>-${s2++} ${myemployees[i]}`)}
}
document.write(`</div><hr>`)
}

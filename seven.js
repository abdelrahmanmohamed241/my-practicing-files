/*function greetme(name, age) {
    if (age < 16){
        console.log("your age is not suitable")
    }
    else {
        console.log(`hi ${name} your age is ${age}`)
    }
}
greetme("ahmed",23);
greetme("abdo",14);
function years(start, end, execlude){
    for (let i = start;i<=end;i++){
        if (i === execlude){
            return `interrupting`;
        }
        console.log(i)
    }
}
years(2008,2022,2020)
function calc(...numbers){
    let result = 0;
   // number = number || "unknown"
    for(let i =0;i<numbers.length;i++){
        result += numbers[i];
    }
    return result;
}
console.log(calc(12,7,1,88,98,4))*/
/*function showinfo(user="un",age="un",rate="un",show="yes",...skills){
document.write(`<div>`)
document.write(`<h2>welcome ${user}</h2>`)
document.write(`<p>Age: ${age}</p>`)
document.write(`<p>hour rate: $${rate}</p>`)
if (show === "yes"){
    if (skills.length > 0){
        document.write(`<p>skills: ${skills.join(" | ")}</p>`)
    }
else {
    document.write(`no skills`)
}
}
else{
    document.write(`<p>skils is hidden</p>`)
}
document.write(`</div>`)
}
showinfo("abdo",14,20,"yes","html","css")*/
function show(a,b,c){
    let name;
    let age;
    let state;
        if(typeof a == "string"){
            name = a;
        }
       else if(typeof a == "number"){
            age = a;
        }
        else{
            state = a;
        }
         if(typeof b == "boolean"){
            if(b == true){
                state = "you are available"
            }
            else if (b == false){
                state = "you are not available"
            }
        }
        if(typeof c == "string"){
            name = c
        }
        else if(typeof c == "number"){
            age = c;
        }
        else{
            state = c;
        }
    return (`hello ${name} , your age is ${age} , ${state}`)
}
console.log(show(66,false,"nazar"))
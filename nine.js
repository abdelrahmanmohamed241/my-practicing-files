/*let a = [1,2,3,4,5,6]
let newarray = []
for (let i = 0; i <a.length; i++){
    newarray.push(a[i]+a[i])
}
console.log(newarray)

let add = a.map((e) => e + e);
console.log(add);*/
/*swep = "AbDo"
let sw = swep.split("").map(function (e){
return e === e.toUpperCase()?e.toLowerCase(): e.toUpperCase()
}).join("")
console.log(sw)*/
/*ignoren = "juh7ggi7t6"
let ign = ignoren.split("").map(function (e){
    return isNaN(parseInt(e))?e:""
    }).join("")
    console.log(ign)*/
    /*let b=["Ahmed","mohamed","hala","abdo"]
let a = [1,2,3,4,5,6]
let add = a.filter(function(e) {
    return e%2===0;
    })
    console.log(add);
let f = b.filter(function(e) {
    return e.startsWith("a");
    })
    console.log(f);*/
    /*let sentence = "hf53j35v55ff4";
let a = sentence.split("").filter(function(e) {
        return !isNaN(parseInt(e));
    }).map(function(e){
        return e*e;
    }) 
    .join(" ")
    console.log(a)*/
/*let nums = [10,20,15,5]
let add = nums.reduce(function(a,b){
    return a+b;
}, 5)
console.log(add);*/
/*let big =["f","lk","lk","propaganda","lkj","kjhg"]
let check = big.reduce(function(e,a){
    return e.length>a.length?e:a
})
console.log(check)*/
/*let big =["h","&","o","&","l","&","a","&"]
let filter= big.filter(function(e){
    return !e.startsWith("&");
}).reduce(function(a,e){
    return `${a}${e}`
})
console.log(filter)*/
//chalenge
/*let word="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,2,z"
let solution = word.split("").map(function(e){
    return e !==","?e:"";
}).filter(function(e){
    return isNaN(parseInt(e));
}).filter(function(e){
    return !e.startsWith("_");
}).reduce(function(acc,current){
return acc+current
}).slice(true,-isNaN(word))
console.log(solution)*/

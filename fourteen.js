
/*let mydata=[1,1,1,2,2,3]
let myuniquedata=new Set(mydata).add(3).add(4)
myuniquedata.add(5).add("a")
myuniquedata.delete(4)
console.log(myuniquedata)
console.log(myuniquedata.size)
console.log(myuniquedata.has("a"))*/
/*let m=new Set([1,1,2,2,3,"A","A"])
console.log(m.size)
let iterattor=m.keys()
console.log(iterattor)
console.log(iterattor.next().value)
console.log(iterattor.next().value)
m.forEach((el) => console.log(el))*/
/*let mw=new WeakSet([{A:1,B:2}])//take object only
console.log(mw)*/
// can not support that
/*let iterattorw=mw.keys()
console.log(iterattorw)
console.log(iterattorw.next().value)
console.log(iterattorw.next().value)
mw.forEach((el) => console.log(el))*/
/*let myo={}
let myemptyo=Object.create(null)
let mym=new Map();
console.log(myo)
console.log(myemptyo)
console.log(mym)
let mynewo={
10:"number",
"10":"string"
}
console.log(mynewo[10])
let length=Object.keys(mynewo).length;
console.log(length)
let mynewm=new Map()
mynewm.set(10,"number")
mynewm.set("10","string")
console.log(mynewm.get(10))*/
/*let mymap=new Map([
    [10,"number"],
    ["ahmed","string"]
])
mymap.delete(10)
console.log(mymap.has("ahmed".toUpperCase()))*/
/*console.log(Array.from("osama"))
console.log(Array.from("12345",function(n){
    return +n * +n;
}))
//=*/
/*console.log(Array.from("12345",(n) => +n * +n))
let myarray=[1,1,2,2,3,4,4]
let myset=new Set(myarray)
console.log(myset)
console.log([...new Set(myarray)])
function testargs(){
    return Array.from(arguments);
}
console.log(testargs("osama","ahmed",1,5))*/
/*let myarray=[10,20,30,40,50,"a","b"]
myarray.copyWithin(1,4,5)
console.log(myarray)*/
//let nums=[1,4,6,7,8,5]
//let mynum=10;
//let check=nums.some((e)=> e>5)
/*let check=nums.some(function(e){
    console.log("test")
    return e>this
},mynum)*/
/*let check=nums.some(function(e){
    console.log("test")
    return e>5
})
console.log(check)
let range={
    min:10,
    max:20
}
let checknuminrange=nums.some(function(e){
    console.log("hu")
    return e>=this.min && e<=this.max;
},range)
console.log(checknuminrange)*/
/*const locations={
    20:"pl3",
    30:"pl3",
    10:"pl1",
    40:"pl4",
}
let minlocation=15;
let locationsarray=Object.keys(locations)
console.log(locationsarray)
let locationsarraynums=locationsarray.map((n)=>+n)
console.log(locationsarraynums)
let check=locationsarraynums.every(function(e){
    return e>this
},minlocation)
console.log(check)*/
/*console.log([..."osama"])
let myarr1=[1,2,3]
let myarr2=[4,5,6]
let allarrs=[...myarr1,...myarr2]
console.log(allarrs)*/
/*
let allfriends=["os","ah","as"]
let lastfriends=["sa","ma"]
allfriends.push("sa","ma")
console.log(allfriends)
*/ //==
//allfriends.push(...lastfriends)
/*let mynums=[10,20,50,700]
console.log(Math.max(...mynums))
let obj1={
    a:1,
    b:2
};
let obj2={
    c:3,
    d:4
}
console.log({...obj1,...obj2,e:5})*/
//1
/*let setofnums=new Set().add(10)
setofnums.add(20).add(setofnums.size)
console.log(setofnums)*/
//2
/*let myfriends=["osama","ahmed","sayed","sayed","mahmoud","osama"].copyWithin(0,1,2).copyWithin(1,4)
s=new Set(myfriends)
console.log(s)*/
//3
/*let myo={
    "un":"osama",
    role :"admin",
    "country":"egypt",
};
let mym=new Map();
mym.set("role","admin")
let mym1=new Map();
mym1=Object.keys(myo).length
console.log(mym.has("role"))*/
//4
/*let n= 100020003000;
console.log(+[...new Set(n.toString())].sort().slice(true).join(""))*/
//5
/*let n="elzero"
let m=Array.from(n)
console.log(...n)*/
//6
/*let cs=["a","b","c","d",32,13,14]
cs.sort();
cs.copyWithin(0,3,6)
console.log(cs)*/
//8
let n1=[10,20,10,20]
let n2=[30,20,10]
console.log(Number(Math.max(...n2))*[...n1,...n2].length)
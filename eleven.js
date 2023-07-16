/*let myidelement = document.getElementById("my-div")
let mytagelements = document.getElementsByTagName("p")
let myqueryelement = document.querySelectorAll(".my-span")
let myclasselements = document.getElementsByClassName("my-span")
console.log(myidelement)
console.log(mytagelements)//we can use indexes[0]||[1]
console.log(myclasselements)
console.log(myqueryelement)
console.log(document.title)
console.log(document.body)
console.log(document.forms[0].one.value)
console.log(document.links[0].href)*/
/*let myelement =document.querySelector(".js")
console.log(myelement.innerHTML)
console.log(myelement.textContent)
//myelement.innerHTML="text from <span>11.js</span> File";
myelement.textContent="text from <span> </span>File"
document.images[0].src = "https://google.com";
document.images[0].alt = "alternate";
document.images[0].title = "alternate";
document.images[0].id = "pic";
document.images[0].className = "img";
let mylink = document.querySelector(".link")
mylink.setAttribute("href","https://google.com")
console.log(mylink.getAttribute("class"))
console.log(mylink.getAttribute("href"))*/
/*console.log(document.getElementsByTagName("p")[0].attributes)
let myp=document.getElementsByTagName("p")[0];
if (myp.hasAttribute("data-src")) {
    if (myp.getAttribute("data-src")==="") {
        myp.removeAttribute("data-src")
    }
}else{
    myp.setAttribute("data-src", "new")
}
if (document.getElementsByTagName("div")[0].hasAttributes()){
    console.log("yes")
}else{
    console.log("no")
}*/
/*let myelement = document.createElement("div");
let myattr=document.createAttribute("data-custom");
let mytext = document.createTextNode("product un")
let mycomment=document.createComment("this is div")
myelement.className = "product";
myelement.setAttributeNode(myattr)
myelement.setAttribute("data-test", "testing");
myelement.appendChild(mytext)
myelement.appendChild(mycomment)
document.body.appendChild(myelement)*/
/*for (i=1 ; i<4 ; i++){
let myelement = document.createElement("div");
let myh = document.createElement("h2")
let myp = document.createElement("p")

myh.className="h2";
let myhtext = document.createTextNode(`product title ${i}`)
myh.appendChild(myhtext)

myp.className="p";
let myptext = document.createTextNode("product description")
myp.appendChild(myptext)
myelement.appendChild(myh)
myelement.appendChild(myp)
document.body.appendChild(myelement)
}*/
/*let myelement = document.querySelector("div");
console.log(myelement)
console.log(myelement.childNodes)
console.log(myelement.children)
console.log(myelement.children[1])
console.log(myelement.firstChild)
console.log(myelement.lastChild)
console.log(myelement.firstElementChild)
console.log(myelement.lastElementChild)*/
/*let mybutton=document.getElementById("button")
mybutton.onclick=function(){
    console.log("yes")
}*/
/*let mybutton=document.getElementById("button")
mybutton.oncontextmenu=function(){
    console.log("yes")
}*/
/*let mybutton=document.getElementById("button")
mybutton.onmouseleave=function(){
    console.log("yes")
}*/
//let mybutton=document.getElementById("button")
/*mybutton.onmouseenter=function(){
    console.log("yes")
}
window.onscroll=function(){
    console.log("scroll")
}*/
/*let userinput=document.querySelector("[name='username']")
let ageinput=document.querySelector("[name='age']")
document.forms[0].onsubmit=function(e){
    let uservalid=false;
    let agevalid=false;
    if (userinput.value !== "" && userinput.value.length <=10){
    uservalid=true
    }
    if (ageinput.value!==""){
        agevalid=true
    } 
    if (uservalid === false||agevalid===false){
        e.preventDefault();
    } 
} 
document.links[0].onclick=function(event){
    console.log(event)
    event.preventDefault();
}*/
/*let two = document.querySelector(".two");
window.onload = function() {
    two.focus();
};
let one = document.querySelector(".one");
window.onblur = function() {
    document.links[0].click();
};*/
/*console.log(element.classList.item("2"))
element.onclick=function(){
    element.classList.toggle("oned")
}
console.log(element.classList.contains("show"))*/
/*element.style.color="#ff0000"
element.style.fontWeight="bold"
element.style.cssText="font-weight:bold;color:green;opacity:0.9"
element.style.removeProperty("color")
element.style.setProperty("font-size", "40px","important")
console.log(document.styleSheets[0].rules[0].style.removeProperty("line-height"))
console.log(document.styleSheets[0].rules[0].style.setProperty("background-color","red"))*/
//let element=document.getElementById("my-div")
//let createdp = document.createElement("p")
//element.before("hello from js")
//element.after(createdp)
//element.prepend(createdp)
//element.append(createdp)
//element.remove()
/*let span=document.querySelector(".two");
console.log(span.nextElementSibling);
console.log(span.nextSibling)
console.log(span.previousElementSibling)
span.onclick = function(){
    span.parentElement.remove()
}*/
/*let myp=document.querySelector("p").cloneNode(true);
let mydiv=document.querySelector("div")
myp.id= `${myp.id}-clone`
mydiv.appendChild(myp)*/
/*window.onload = "osama"
myp.addEventListener("click", function(){
    console.log("hello")
})
myp.addEventListener("click", function(){
console.log("gg")
})*/
/*let myp=document.querySelector("p")
myp.onclick=function(){
    let newp=myp.cloneNode(true)
    newp.className= "clone"
    document.body.appendChild(newp)
}*/
/*let clone=document.querySelector(".clone")
cloned.onclick=function(){
    console.log("i am cloned")
}*/
/*document.addEventListener("click", function(e){
    if (e.target.className==='clone'){
       // console.log(e.target)
    console.log("i am cloned")
    }
})*/
//chalenge
let mydiv = document.createElement("div")
mydiv.style.cssText="color:rgb(35,169,110);font-weight:bold;font-size:21px;display:flex;margin:20px;justify-content:space-between;"
mydiv.className="div";
let mydivtext0 = document.createElement("div")
let mydivtext0text=document.createTextNode("Elzero")
mydivtext0.appendChild(mydivtext0text)
let mydivtext1 = document.createElement("div")
let mydivtext1text=document.createTextNode("Home About  Service  Contact")
mydivtext1.appendChild(mydivtext1text)
mydivtext1.style.cssText="color:#bbb;font-size:17px;padding-top:4px;"
mydiv.appendChild(mydivtext0)
mydiv.appendChild(mydivtext1)
let table=document.createElement("div")
table.className="text";
table.style.cssText="display:flex; padding:20px;background-color:#eee;flex-wrap:wrap; justify-contnt:center;gap:20px;box-sizing:border-box;"
let tabletext1=document.createElement("div")
tabletext1.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext1.className="h"
let t=document.createElement("div")
let tt=document.createTextNode("1")
t.appendChild(tt)
let b=document.createElement("div")
let bt=document.createTextNode("product")
b.appendChild(bt)
t.style.cssText="font-size:23px"
tabletext1.appendChild(t)
tabletext1.appendChild(b)
let tabletext2=document.createElement("div")
tabletext2.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext2.className="h"
t=document.createElement("div")
tt=document.createTextNode("2")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext2.appendChild(t)
t.style.cssText="font-size:23px"
tabletext2.appendChild(b)
let tabletext3=document.createElement("div")
tabletext3.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext3.className="h"
t=document.createElement("div")
tt=document.createTextNode("3")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
t.style.cssText="font-size:23px"
tabletext3.appendChild(t)
tabletext3.appendChild(b)
let tabletext4=document.createElement("div")
tabletext4.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext4.className="h"
t=document.createElement("div")
tt=document.createTextNode("4")
t.appendChild(tt)
t.style.cssText="font-size:23px"
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext4.appendChild(t)
tabletext4.appendChild(b)
let tabletext5=document.createElement("div")
tabletext5.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext5.className="h"
t=document.createElement("div")
tt=document.createTextNode("5")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
t.style.cssText="font-size:23px"
b.appendChild(bt)
tabletext5.appendChild(t)
tabletext5.appendChild(b)
let tabletext6=document.createElement("div")
tabletext6.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext6.className="h"
t=document.createElement("div")
tt=document.createTextNode("6")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext6.appendChild(t)
t.style.cssText="font-size:23px"
tabletext6.appendChild(b)
let tabletext7=document.createElement("div")
tabletext7.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext7.className="h"
t=document.createElement("div")
tt=document.createTextNode("7")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
t.style.cssText="font-size:23px"
tabletext7.appendChild(t)
tabletext7.appendChild(b)
let tabletext8=document.createElement("div")
tabletext8.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext8.className="h"
t=document.createElement("div")
tt=document.createTextNode("8")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext8.appendChild(t)
t.style.cssText="font-size:23px"
tabletext8.appendChild(b)
let tabletext9=document.createElement("div")
tabletext9.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext9.className="h"
t=document.createElement("div")
tt=document.createTextNode("9")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext9.appendChild(t)
t.style.cssText="font-size:23px"
tabletext9.appendChild(b)
let tabletext10=document.createElement("div")
tabletext10.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext10.className="h"
t=document.createElement("div")
tt=document.createTextNode("10")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext10.appendChild(t)
t.style.cssText="font-size:23px"
tabletext10.appendChild(b)
let tabletext11=document.createElement("div")
tabletext11.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext11.className="h"
t=document.createElement("div")
tt=document.createTextNode("11")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext11.appendChild(t)
tabletext11.appendChild(b)
t.style.cssText="font-size:23px"
let tabletext12=document.createElement("div")
tabletext12.style.cssText="padding:20px;background-color:white;border:1px solid white;width: calc(1117px / 3);text-align:center; color:black;"
tabletext12.className="h"
t=document.createElement("div")
tt=document.createTextNode("12")
t.appendChild(tt)
b=document.createElement("div")
bt=document.createTextNode("product")
b.appendChild(bt)
tabletext12.appendChild(t)
tabletext12.appendChild(b)
t.style.cssText="font-size:23px"
table.appendChild(tabletext1)
table.appendChild(tabletext2)
table.appendChild(tabletext3)
table.appendChild(tabletext4)
table.appendChild(tabletext5)
table.appendChild(tabletext6)
table.appendChild(tabletext7)
table.appendChild(tabletext8)
table.appendChild(tabletext9)
table.appendChild(tabletext10)
table.appendChild(tabletext11)
table.appendChild(tabletext12)
document.body.appendChild(mydiv)
document.body.appendChild(table)
let f=document.createElement("footer")
let ft=document.createTextNode("Copyright  2022")
f.appendChild(ft)
f.style.cssText="color:rgb(255,255,255);background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;"
document.body.appendChild(f)
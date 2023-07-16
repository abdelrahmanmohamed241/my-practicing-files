/*const myjsonobject=`{"username":"osama","age":39}`
const myjsobject=JSON.parse(myjsonobject)
myjsobject["username"]="elzero"
const myjsonobject1=JSON.stringify()*/
/*console.log(1)
setTimeout(() => {
    console.log("o")
}, 7000);
console.log(4)*/
/*let req=new XMLHttpRequest()
req.open("GET","https://api.github.com/users/elzerowebschool/repos")
req.send()
console.log(req)
console.log(req.readyState)
req.onreadystatechange=function(){
if (this.readyState===4&&this.status===200){
    let jsdata=JSON.parse(this.responseText);
    for (let i=0;i<jsdata.length;i++){
        let div=document.createElement("div");
        let n=document.createTextNode(jsdata[i].full_name)
        div.appendChild(n);
        document.body.appendChild(div);
    }
}
}*/
//1
[
    {
        "id": 1,
        "title": "Title1",
        "body": "Article Number 1 body",
        "category": "HTML",
        "author": "Ali"
    },
    {
        "id": 2,
        "title": "Title2",
        "body": "Article Number 2 body",
        "category": "CSS",
        "author": "Mahmoud"
    },
    {
        "id": 3,
        "title": "Title3",
        "body": "Article Number 3 body",
        "category": "JS",
        "author": "Osama"
    },
    {
        "id": 4,
        "title": "Title4",
        "body": "Article Number 4 body",
        "category": "Bootstrap",
        "author": "Sayed"
    },
    {
        "id": 5,
        "title": "Title5",
        "body": "Article Number 5 body",
        "category": "Sass",
        "author": "Ahmed"
    }
]
// Json
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "eighteen.json");
// myRequest.send();

// // console.log(myRequest);

// myRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         console.log(this.responseText);
//         setTimeout(() => {
//             console.log("Data Loaded");
//         }, 0);
//     }
// }
"================================================================================="
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let mainData = JSON.parse(this.responseText);

//         for(let i = 0; i < mainData.length; i++){
//             mainData[i].category = "All";
//         }
//         console.log(mainData);
//         console.log(typeof mainData);

//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData);
//         console.log(typeof updatedData);
//     }
// }
"================================================================================="
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET","articles.json");
// myRequest.send();


// myRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let minData = JSON.parse(this.responseText);
//         let div = document.createElement("div");
//         div.id = "data";

//         for(let i = 0; i < minData.length; i++){
//             let title = document.createElement("h2");
//             let titleText = document.createTextNode(minData[i].title);
//             title.appendChild(titleText);

//             let body = document.createElement("p");
//             let bodyText = document.createTextNode(minData[i].body);
//             body.appendChild(bodyText);

//             let category = document.createElement("p");
//             let categoryText = document.createTextNode(minData[i].category);
//             category.appendChild(categoryText);

//             let author = document.createElement("p");
//             let authorText = document.createTextNode(minData[i].author);
//             author.appendChild(authorText);

//             let data = document.createElement("div");
//             data.appendChild(title);
//             data.appendChild(body );
//             data.appendChild(category);
//             data.appendChild(author);

//             div.appendChild(data);
//             document.body.appendChild(div);
//         }
//     }
// }
//promises
/* myp=new Promise((resolve,reject) => {
    let connect=false;
    if(connect){
    resolve("connection established")
    }else{
        reject(Error("error"))
    }
    }).then(
        (resolvevalue)=>console.log(`good ${resolvevalue}`),
        (rejectvalue)=>console.log(`bad ${rejectvalue}`)
    )*/
/*const myp=new Promise((resolve,reject) => {
    let employees=[]
    if(employees.length===4){
            resolve(employees)
    }else{
        reject(Error("num of employees is not 4"))
        }
        })
        .then((resolvevalue)=>{
                resolvevalue.length=2;
                return resolvevalue;
            })
        .then((resolvevalue)=>{
            resolvevalue.length=1;
            return resolvevalue;
        })
        .then((resolvevalue)=>{
               console.log(`thechoosen one is ${resolvevalue}`)
            }).catch((rejectedreason)=>console.log(rejectedreason)).finally(console.log("done"))*/
/*const getData=(applink)=>{
    return new Promise((resolve,reject)=>{
        let req=new XMLHttpRequest()
        req.onload=function(){
        if (this.readyState===4&&this.status===200){
        resolve(JSON.parse(this.responseText))
        }else{
            reject(Error("no data"))
        }
    };
    
    req.open("GET",applink)
    req.send()
    })
}
   getData("https://api.github.com/users/elzerowebschool/repos").then(
    (result)=>{
        result.length=10
        return result;
    }).then((result)=>console.log(result[0].name)).catch((rej)=>console.log(rej))*/
    //====
    /*fetch("https://api.github.com/users/elzerowebschool/repos").then((result)=>{
        let mydata=result.json();
        return mydata;
    }).then((mydata)=>{
        mydata.length=10
        return mydata;
    }).then((mydata)=>{
        console.log(mydata[0].name)
    })*/
/*const my1pro=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("the 1")
    },1000)
})
const my2pro=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("the 2")
    },2000)
})
const my3pro=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("the 3")
    },3000)
})*/
/*Promise.allSettled([my1pro,my2pro,my3pro]).then((values)=>console.log(values),
(rejvalues)=>console.log(rejvalues))*/
/*Promise.race([my1pro,my2pro,my3pro]).then((values)=>console.log(values),
(rejvalues)=>console.log(` i ${rejvalues}`))*/
/*function getData(){
    let usres=["h"]
        if(usres.length>0){
            return Promise.resolve("users found")
        }else{
            return Promise.reject("no users found")
        }
   /* return new Promise((res,rej)=>{
        let usres=["h"]
        if(usres.length>0){
            res("users found")
        }else{
            rej("no users found")
        }
    })*/
//}
/*getData().then((resolvedvalues)=>console.log(resolvedvalues),
(rejecedvalues)=>console.log(rejecedvalues)
)*/
/*async function getData(){
    let usres=["h"]
        if(usres.length>0){
            return "users found";
        }else{
            return "no users found";
        }
        
    }
    getData().then((resolvedvalues)=>console.log(resolvedvalues),
(rejecedvalues)=>console.log( rejecedvalues))*/
 //   console.log(getData())
 /*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

/*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Iam The Good Promise");
      reject(Error("Iam The Bad Promise"));
    }, 3000);
  });
  
  async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue));
    // console.log(await myPromise);
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
  }
  
  readData();*/
  /*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am The Good Promise");
    }, 3000);
  });
  */
  /*async function readData() {
    console.log("Before Promise");
    try{
    console.log(await myPromise);
    }catch(reason){
        console.log(`reason ${reason}`)
    }finally{
    console.log("After Promise");
  }
} 
  readData();
*/
  /*async function fetchData() {
    console.log("Before Promise");
    try{
   let mydata=await fetch("https://api.github.com/users/elzerowebschool/repos")
    }catch(reason){
        console.log(`reason ${reason}`)
    }finally{
    console.log("After Promise");
  }
} 
  fetchData();*/
  const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(JSON.parse(this.responseText))
            }else{
                reject(Error("No Data Found"));
            }
        };
        myRequest.open("GET",apiLink );
        myRequest.send();
    });
};

getData("./eighteen.json")
    .then((result) => {
        result.length = 5;
        return result;
    })
    .then((result) => {
        for(let i = 0; i < result.length; i++){
            let div = document.createElement("div");

            let title = document.createElement("h3");
            let titleText = document.createTextNode(result[i].title);
            title.appendChild(titleText);

            let description = document.createElement("p");
            let descriptionText = document.createTextNode(result[i].description);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.appendChild(div);
        }
    }).catch((rej) => {
        return(rej);
    })


async function fetchData(){
    try{
        let myData = await fetch("./eighteen.json");
        let data = await myData.json();
        data.length = 5;
        for(let i = 0; i < data.length; i++){
            let div = document.createElement("div");

            let title = document.createElement("h3");
            let titleText = document.createTextNode(data[i].title);
            title.appendChild(titleText);

            let description = document.createElement("p");
            let descriptionText = document.createTextNode(data[i].description);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.appendChild(div);
        }
    }catch(error){
        console.log("No Data Found");
    }
}

fetchData();

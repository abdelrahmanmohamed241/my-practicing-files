/*let s="heelo i am here to Here"
let reg=/here/ig;//=("here","ig")
console.log(s.match(reg))*/
/*let tid="com net org info code io";
let tidreg=/(org|com|net)/ig;
console.log(tid.match(tidreg))
let nums="12345678910";
let numsreg=/[^0-3]/g;
console.log(nums.match(numsreg))
let snums="12!34?567$8^#9&10";
let snumsreg=/[^0-9]/g;
console.log(snums.match(snumsreg))
let practice="os1 os1os os8 os8os os9os";
let practicereg=/os[5-9]os/g;
console.log(practice.match(practicereg))*/
/*let s="AaBbcdefG123!234%^&*"
let satoz=/[^a-z0-9]/ig;
console.log(s.match(satoz))*/
/*let email="o@@@...com o@g.com o@g.net A@Y.com o-g.com o@s.com 1@1.com"
let dot=/./g;
let word=/\w/g;
let wordc=/\W/g;
let wordandat=/\w@\w.(com|net)/g;
console.log(email.match(wordandat))*/
/*let ns="sayed 1spam 2spam 3spam spam5 osama spamahmed";
let re=/(\bspam|spam\b)/ig;
console.log(ns.match(re))
console.log(re.test(ns))
console.log(re.test("lana"))*/
/*let mails="o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
//let mailsre=/\w+@\w+.(com|net)/ig;
let mailsre=/\w+@\w+.\w+/ig;
console.log(mails.match(mailsre))
let nums="0110 10 150  05120 350 00";
//let numsre=/0\d+0/ig;
let numsre=/0\d*0/ig;
console.log(nums.match(numsre))
let urls="https://google.com http://www.web.net web.com"
let urlsreg=/(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsreg))
let s="s100s s30005 s50000s s950000s";
console.log(s.match(/s\d{3}s/ig))
console.log(s.match(/s\d{4,5}s/ig))
console.log(s.match(/s\d{4,}s/ig))*/
/*let mys=" we love programming"
let names="1osamaz 2ahmedz 3mohamed 4moustafaz 5gamalz"
console.log(/ing$/ig.test(mys))
console.log(/^\s/ig.test(mys))
console.log(names.match(/\d\w{5,}(?!z)/ig))
console.log(names.match(/\d\w{8}/ig))*/
/*let txt="we love programming and @ because @ is amazing";
console.log(txt.replace("@","."))
console.log(txt.replaceAll("@","."))
let re=/@/ig;
console.log(txt.replaceAll(re,"."))*/
/*document.getElementById("register").onsubmit=function(){
    let phoneinput=document.getElementById("phone").value;
    let phonere=/\(\d{4}\)\s\d{3}-\d{4}/ig;
    let validationresult =phonere.test(phoneinput);
    if(validationresult===false){
        return false;
    }
    return true;
}*/
//1
/*let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipreg=/\w+/ig;
console.log(ip.match(ipreg))*/
//2
/*let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/os\d*o/ig))*/
//3
/*let phone = "+(995)-123 (4567)";
let re=/\+\(\d{1,3}\)\-\d{1,3}\s\(\d{1,4}\)/ig;
console.log(phone.match(re));*/
//5
/*let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /25(\/|\s|\s\-\s)10(\/|\s|\s\-\s)(1982|82)/ig; // Write Pattern Here
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"*/
//6
/*let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let re = /\w{4,6}:?(\/\/|.)\w{3,6}.?(\w{3,6})?.?(org)?:?(\w+)?\/?(\w+)?.?(\w+)?(\W)?(id=100&cat=topics)?/ig;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));*/
/*let calc = function (num1, num2){
    return num1 + num2;
};
document.write(calc(19,7))*/
/*function say(fname,lname){
    let message = `hello`;
    function msg(){
        function getname(){
            return `${fname} ${lname}`
        }
    /*message =*/ //return `${message} ${fname} ${lname}`
 //   }
   // msg();
    //return /*message*/msg();
//}
//console.log(say("ahmed","anas"))
/*let print = _ => 11;// () or _
console.log(print())
let prit = (num, num2) => num + num2;// () or not
console.log(prit(12,88)*/
//chalenge
/*let names = function(...fullname){
    return `string [${fullname.join("],[")}]`;
}
console.log(names("ahmed","ol","po"))*/
/*let names = (...fullname) => `string [${fullname.join("],[")}]`;
console.log(names("ahmed","ol","po"))*/
let mynumbers = [20, 50,10,60]
//let calc = (one, two, ...nums) => one + two + nums[0]
let calc = function(one, two, ...nums) {
    return one + two + nums[0];
}
console.log(calc(20, 50, 10, 60))
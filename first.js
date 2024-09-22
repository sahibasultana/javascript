//strings are imutable cannot be change but arrays are mutable.
/*fullname="25";
console.log(fullname);    /*it is dynamically typed language in which no need to tell type of variable like string,numbers,boolean*/
/*let name="sahiba sultana";
let age=24;
age=35;
age=86;
let totalPrice=1000;
console.log(name,age);
const student={
    fullName:"sahiba sultana",
    age:21,
    cgpa:3.1,
};
student["age"]=student["age"]+1;  /*we can chsnge values in let but cannot in simple variables but we can change calue for const object keys,
console.log(student["age"]);
console.log(student.fullName);
const profile={
    username:"sahiba sultana",
    isFollow:false,
    followers:453,
    following:876,
};
console.log(profile)*/
//aritmetic operators
/*let a=2;
let b=2;
console.log("a=",a,"&b=",b);
console.log("a+b=",a+b);
console.log("a**b =",a**b);    //exponentiation use for power 
//uniary operators
console.log("++a=",++a);//3
console.log("a++=",a++); //2
console.log("a=",a)*/;//3
//assignment operators..(a+=1)=(a=a+1),(a%=4)=(a=a%4),(a**=5)=(a=a**5)
//comparision operators..equal to ==,not equal to!=,(strict version of checking) equal to & type ===, not equal to & type!==
//logical operator &&(both conditions are true),||(when one condition is true),!(if true then false if false then true)
/*let a=6;
let b=5;
let cond1=a>b;//true
let cond2=a===6;//true
console.log("cond1&&cond2 =",cond1&&cond2);
let a=6;
let b=5;
let cond1=a>b;//true
let cond2=a===5;//true
console.log("cond1||cond2 =",cond1||cond2);
let a=6;
let b=5;
console.log("!(a<b) =",!(a<b));
//conditional statements
let age=25;
if(age>=18){
    console.log("you can vote");
}
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);
let age =35;
if(age<20)
    {
    console.log("juniors");
}
else if(age>30)
{
    console.log("seniors");
}
else
{
    console.log("middle");
}
//ternary operators
let age=25;
result=age>=18?"adult":"not adult";
console.log(result);
let age=25;
age>=18?console.log("adult"):console.log("not adult");
alert("hello!");   //one time popup.
let name=prompt("hello!");
console.log(name);     //print popup with message
prompt("enter a number");
let num;
if(num%5===0){
    console.log(num,"multiple of 5");
}
else{
    console.log(num,"not multiple of 5");
}
let score=prompt("enter your score(0-100)");
if(score>=90 &&score<=100){
    console.log("grade A");
}
else if(score>=70&&score<=89){
    console.log("grade B");
}
else if(score>=60&&score<=69){
    console.log("grade C");
}
else if(score>=40&&score<=50){
    console.log("grade D");
}
else{
    console.log("grade F");
}
//loops
let sum=0;
let n=100;
for(let i=0;i<=n;i++){
    sum=sum+i;
}
console.log("sum=",sum);
//while loop
let i=1;
while(i<=10){
    console.log("sahiba sultana");
    i++;
}
//do while loop
let i=1;
do{
    console.log("sahiba");
    i++
}while(i<=10);

//for-of loop    ,..... for strings and arrays
let str="javascript";
let size =0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size =",size);
//for-in loop......,objects   return key values
let student={
    name:"sahiba sultana",
    age:21,
    cgpa:3.1,
     ispass:true,
};
for (let key in student){
    console.log(key,student[key]);
}

for(let i=0;i<=100;i++){
    if(i=i%2==0){
    console.log("even numbers are",i);
} }
    
let guessNum=45;
let userNum=prompt("guess the game number:");
while(userNum!=guessNum){
    userNum=prompt("you entered wrong number.tryagain!");
}
console.log("you won");

//strings
let str="sahibasultana";
console.log(str.length);
console.log(str[0]);
let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees `;
console.log(output);

//tempalte literals
//let specialstring=`this is template literals`;
//console.log(typeof specialstring);
//strinf interpolation

//let specialstring=`this is template literals ${1+2+2}`;
//console.log( specialstring);
//escape characters
//console.log("sahiba \n sultana");
//let str="sahiba\tsultana";
//console.log(str.length);

//string methods
let str="sahiba sultana";
str=str.toUpperCase();
console.log(str);
let str="     sahiba sultana  js      ";
console.log(str.trim());   //remove whitespace from start and end
let str="0123456";
console.log(str.slice(1,4)); //give any part of string
let str="";
console.log(str.trim()); 
let str1="sahiba";
let str2="sultana";
console.log(str1.concat(str2));
let str="hello";
console.log(str.replace("h","y"));  //replace the strings
console.log(str.replace("lo","p"));
let str="hello";
console.log(str.charAt(3));
let str=prompt("enter full name");
 str="@"+"sahibasultana"+"234"+str.length;
console.log(str);
//arrays
let arr=[85,76,35,45,98];
let sum=0;
for(let val of arr){
    sum=sum+val; 
}
let avg=sum/arr.length;
console.log(`avg marks of class ${avg}`);
let items=[300,450,670,700,800];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);
//array methods
let fooditems=["apple","mango","banana"];
fooditems.push("chips","samosa");
console.log(fooditems);
let deleteditem=fooditems.pop();
console.log(fooditems);
console.log("deleted",deleteditem);

//change to strings
let fooditems=["apple","mango","banana"];
console.log(fooditems.toString());
//concat joins two arrays
let fooditems=["apple","mango","banana"];
fooditems.unshift("orange");   //add at start
console.log(fooditems);
let fooditems=["apple","mango","banana"];
fooditems.shift("orange");   //delete at start
console.log(fooditems)
let fooditems=["apple","mango","banana","orange","pineapple"];
console.log(fooditems.slice(1,2));   //slice
//splice(change original array )
//add,remove or replace
let arr=[3,4,5,7,6,5,2,0];
//arr.splice(2,2,15,45);
//add element
//arr.splice(2,0,101);
//delete element
//arr.splice(3,1);
//replace element
arr.splice(3,1,56);
console.log(arr);
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
//companies.splice(0,1);
//companies.shift();            //shift delete at start ,pop delete from end,unshift delete add at start ,push add at end
//companies.splice(2,1,"ola");
companies.push("amazon");
console.log(companies);
//functions and methods
function myfunction(){
    console.log("welcome to apna college");
    console.log("we are learning js");
}
myfunction();
function myfunction(msg){ //parameters->input
    console.log(msg );
}
myfunction("i love js");  //argument

function sum(a,b){   // imp function parameters-->are like local variables-->scope block only exist inside a block
    console.log(a+b);
}
sum(8,7);
//modern js  .....arrow sum
const arrowsum=(a,b)=>{     //arrow function
    console.log(a+b);
}
arrowsum(5,5);

//arrow multiplication function
const arrowmult=(x,y)=>{
    //console.log(x*y);
    return x*y;
}
//arrowmult(2,5);
const printhello=()=>{
    console.log("hello");
}
printhello();

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {
            count++
        }
    }
    console.log(count);
     
}
 countVowels("sahiba sultana");
 const countvow=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {
            count++
        }
    }
    console.log(count);
     
}
 countVowels("adgbvvfbviav");
 
//for each loop in arrays //*imp they are higher order function/methods in this we can take functions as parameters or return a function.
//array.foreach(callbackfunction) a callback function passed an argument to another function.
let arr=["pune","delhi","mumbai"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);//we can pass three parameters to for each loop...value,index,array
});

let arr=[2,4,6,8];
arr.forEach((val)=>{
        console.log(val**2);
});
//or we can write foreach also in this form.
let nums=[2,4,6,8];
let calsquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calsquare);

//map ...creates new array with results of some operation.the value its callback returns are used to form new array
let nums=[2,4,6,8];
 nums.map((val)=>{
    console.log(val);
});

let nums=[2,4,6,8];
 let newarr=nums.map((val)=>{
     return val*2;
});
console.log(newarr);
//foreach is use for performing any function and map is use to create new arr from original array
 
//filter ..filter the value based on condition
let arr=[1,3,5,6,7];
let evenarr=arr.filter((val)=>
{
    //return val%2===0;
    return val>3;
}
);
console.log(evenarr);

//reduce ...perform some operations and resuces the array to a single value.it returns the single value.
let arr=[2,3,4,5];
const output=arr.reduce((prev,curr)=>
{
   // return prev+curr;
   return prev>curr?prev:curr;  //largest,smallest,average,sum use array.reduce
});
console.log(output);

let marks=[81,99,93,97,80];
let toppers=marks.filter((val)=>
{
    
  return val>90;
}
);
console.log(toppers);
let n=prompt("enter value of n");
let arr=[];
for (let i=1;i<=n;i++)
{
    arr[i-1]=i; //1(0),2(1),3(2)
}
console.log(arr);
let sum=arr.reduce((res,curr)=>
{
    return res+curr;
});
console.log("sum=",sum);
let factorial=arr.reduce((res,curr)=>
    {
        return res*curr;
    });
    console.log("factorial",factorial);
    */
//DOM ..DOCUMNENT object model ..when a webpage is loaded,browser creates dom of the page.
//in document object full html code is present and document object is present in window object.we can access thisby using window.object
//console.log  only print elements directly the elemnets..//console.dir it print the properties and methods of special objects like(document)
//dom is the way of accessing html throgh javascript
//for dynamic changes that user change by clicking any button or submitting a form can be done by DOM.
//DOM manipulation
//selecting with id
//let heading =document.getElementById("heading");//h1
//console.dir(heading)
//let headings=document.getElemenrByClassName("myClass");
//console.dir(headings);
//console.log(headings);
//selecting with tag
// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);
//the best way for accessing eements is by query selector .we can select tags ,id ,classes by this.it return node list.
//let firstEl=documnet.querySelector("p");//1st element
//console.dir(firstEl);
//let allEl=document.querySelectorAll("p"); //all elemnets
//console.dir(allEl);
//let allEl=document.querySelectorAll(".myclass"); //all elemnets
//console.dir(allEl);
//only one element access for id
//let firstEl=documnet.querySelector("#myid");//1st element
//console.dir(firstEl);
//homework problem very important:read about first child,last child,div children,text node,comment node,element node.
//properties
//1:tag name ..find by tag.name
//2:innertext..only text shows
//3:inner HTML...in this html tags are also shown with text
//text content.... shows text and also hidden elements
//do practice questions
/*let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + " from apna college students";
//let divs=document.querySelectorAll(".box");
//divs[0].innerText="new unique value 1";
//divs[1].innerText="new unique value 2";
//divs[2].innerText="new unique value 3";
//we use loops instead of this it is a better way for too many values
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
//let name=div.getAttribute("name");
//console.log(name);
let para=document.querySelector("p");
console.log(para.setAttribute("class","newclass"));
let div=document.querySelector("div");
//console.log(div.style);
div.innnerText="hello!";
div.style.backgroundColor="green";
div.style.visibility="hidden";
div.style.fontSize="26px";
div.innnerText="hello!";
console.log(div);
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
let div=document.querySelector("div"); 
div.append(newBtn);//adds at the end of node(inside)
div.prepend(newBtn);//adds at the start of node(Inside)
div.before(newBtn);//outside
div.after(newBtn);//outside
let newHeading=document.createElement("h1");
newHeading.innerHTML="<i> hi, i am new!</i>";
document.querySelector("body").prepend(newHeading);
newHeading.remove();
//HOMEWORK:removechild and append child read from mdn.
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);
let para=document.querySelector("p");
 para.setAttribute("class","newclass");
para.classList.add("newClass");
console.log(para.classList);
*/
// EVENTS handling in js...
//let btn1=document.querySelector("#btn1");
//btn1.onclick=(evt)=>{ //evt is event object
    //console.log(evt);
    //console.log(evt.type);
    //console.log(evt.target);
    //console.log("btn1 was clicked");
    //let a=25;
    //a++;
    //console.log(a);
    //event listeners
//callback is a funtion that is passed as a argument in another function,it is event handler.
 //we can do this with event listener..... we can do many works with same event
/*btn1.addEventListener("click",(evt)=>
    {
     console.log("button one was clicked-handler 1")
    // console.log(evt);
});
btn1.addEventListener("click",()=>
    {
     console.log("button one was clicked-handler 2")
});
//for removing event listener
const handler3=("click",()=>
    {
     console.log("button one was clicked-handler 3")
});
btn1.addEventListener("click" ,handler3);
    
btn1.addEventListener("click",()=>
    {
     console.log("button one was clicked-handler 4")
});
//both callback reference  should be same for removing therfore we save it in save handler3
btn1.removeEventListener("click" ,handler3);
//let div=document.querySelector("div");
//div.onmouseover=()=>{
    //console.log("you are inside div");
//};
//if we use both inline handling in html ang event handling in js ,the js has high priority,it wil print first.
//event object....has details about the event ,like event type,target.
let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
         
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);

});

//prototypes....js have special property called prototype..this is a object in a object.
//imp....if object and prototype have same method,object's method will be used.
const  employee={
    calcTax(){
        console.log("tax rate is 20%");
    }
};
const karan={
    salary :50000,
};
//jis object ke function ko hum use krna chate hon ge usy dosre object ka prototype bna dein ge.
karan.__proto__=employee;
//classes
// class is a program-code template for creating objects.it's like  a blueprint.
class ToyataCar{
    constructor(brand,mileage){ //constructor.....invoked initially and use for objects initializing at start
        console.log("creating new object");
        this.brand=brand; 
        this.mileage=mileage;
    }
start(){
    console.log("start");
}
stop(){
    console.log("stop");
}
//setBrand(brand){
    //this.brandName=brand;         //for this we use constructor
//}
}
let fortuner= new ToyataCar("fortuner",20);///constructor
//fortuner.setBrand("fortuner");
//instead of this  we use constructor
console.log(fortuner);
//inheritance
//*imp.......if child&parent have same method,childs method will be used ..called[method overriding]
class person{
    constructor(name){
        this.species="home sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

   // work(){
        //console.log("do nothing");  //method overriding
   // }
}
class engineer extends person{
    constructor(name){
            super(name);          //super keyword is important here for using parent constructor by passing argument name ,if we don't use super with name parameter then name will not print.
    }
    work(){
        super.eat();    //super is used to access methods of parent class.
     console.log("do work");
    }
}
 let sahibaobj=new engineer("sahiba");
//super keyword
//it is used to call the constructor of its parent class to access parents properties and methods.
//practice questions
let DATA="secret information";
class user{
    constructor(name,email,){
        this.name=name;
        this.email=email;
    }
    viewdata(){
console.log("data=",DATA)
    }
}
class admin extends user{
    constructor(name,email){
        super (name,email);
    }
    editdata(){
        DATA="new value";
    }
}
let student1=new user("sahiba","sahiba@gmail.com");
let student2=new user("sultana","sultana@gmail.com");
let teacher=new user("dean","dean@gmail.com");
let admin1=new user("admin","admin@gmail.com");
//error handling
let a=5;
let b=90;
console.log("a=",a);
console.log("b",b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c); 
}
catch(err){
    console.log(err);//error print and other code run as it is without freezing due to error
}
//console.log("a+b=",a+c); //error
console.log("a+b=",a+b);

//sychronous...means the code run in a particular sequence of instructions line by line one completes then other proceeds.
//asycronous...means run data without delay ,in this do not wait for the data that takes time for exexution it runs all data.
//some imp instructions blocked due to some previoos instruction in sycrhonous  programming ..it allows to execute instructions without any delay.
console.log("one");
setTimeout(() =>{ //use for setting time 4s=40000ms
    console.log("hello");
},4000); 
console.log("two");  //this didnot wait for printing hello it printed first then hello called asychronous
//callback..is a function passed an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sum){   //sum is callback
    sum(a,b);
}
calculator(1,2,sum);         //function in afunction as argument
//one more method is for this
calculator(1,2,(a,b)=>{  //function parameters can be used
    console.log(a+b);
});  
//nesting
let age=19;
if(age>=18){
    if(age>=60){       //nested if else loops loop inside loop
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("child");
}
   //for loops are alsdo use for nested loops
   //callbacks
   function getdata(dataId,getnextdata){   //for getting data
    //2s
    setTimeout(()=>{ //callback
        console.log("data",dataId);
        if(getnextdata)
        {
            getnextdata();
        }
    },2000);  // for printing data after two seconds
   }
   //callbacks HELL...nested callbacks stacked below one another forming a pyramid structure.(pyramid of doom).
   //this style of programming becomes difficult to understand and manage
//this is called callback hell..this is not understanble for developers and not a good way of programming.
   getdata(1,()=>{
    console.log("getting data 2......");
    getdata(2,()=>{ //nested callbacks
   console.log("getting data 3.....") //callbacks inide callbacks for delaying of printing data one after other.
        getdata(3);
    });
   });
    //promises
    //promise is for"eventual"completion of task.it is an object in js.it is a solution of callback hell.
    //resolve and reject are callbacks provided by js
//let promise=new Promise((resolve, reject) => {
    //resolve("succes");
    //reject("some error");
//});
function getdata(dataId,getnextdata){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{  
            console.log("data",dataId);
            resolve("success");
            if(getnextdata)
            {
                getnextdata();
            }
        },2000);
     });
    }
   //promises uses after fullfilment or rejection
    const getpromise=()=>{
        return new Promise((resolve, reject) => {
            console.log("i am promise");
            resolve("success");
           //reject("network error");
        });
    }
    let promise=getpromise();
    promise.then((res)=>{          // after resolve use then
console.log("promise fullfilled",res);
    });
    promise.catch((err)=>{
        console.log("rejected",err)   //after rejection use catch
    })
function asyncFunc1 (){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("data1");
    resolve("success");
},4000);
    });
}
function asyncFunc2 (){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("data2");
    resolve("success");
},4000);
    });
}
console.log("fectching data 1...");
asyncFunc1().then((res)=>{
    console.log("fectching data 2...");
    asyncFunc2().then((res)=>{});
});
//resolve callbackhell occur above
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("data",dataid);
resolve("success");
        },2000);
       
    });
}
//using promise chain
//getdata(1).then((res)=>{
//console.log(res);
//getdata(2).then((res)=>{
   // console.log(res);
//});
//});
//this is better way than above promise chain .it is actual promise chain
getdata(1).then((res)=>{
     return getdata(2);
})
.then((res)=>{
    return getdata(3);
})
.then((res)=>{
  console.log(res);
});
//async-await
//always return a promise.
//await.. pauses the execution of its surrounding async function until the promise is settled.
function getdata(dataId){  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{                         //above code is usse to descreibe await async benefit.
        console.log("data",dataId);
        resolve("succes");
    },2000); 
});
 }
 //async await
 //this code is as compare to with callback hell anda promises is easy to understand
 async function  getalldata(){
    console.log("getting data 1....");
    await getdata(1);
    console.log("getting data 2....");
    await getdata(2);
    console.log("getting data 3....");
    await getdata(3);
    console.log("getting data 4....");
    await getdata(4);
    console.log("getting data 5....");
    await getdata(5);
 }
 //there is aproblem that we have to always use a function for async await like getalldata() that is unecessery ,
 //for solving this we use...
 //IIFE... immediately invoked function expression.....called as soon as it is defined.
 //we didnot use it so much ..syntax (function)();
 //we use it for if weto do one time exexution or need immediately execution
 //generally use for api calls
 (async function(){
    console.log("getting data 1....");
    await getdata(1);
    console.log("getting data 2....");
    await getdata(2);
    console.log("getting data 3....");
    await getdata(3);
    console.log("getting data 4....");
    await getdata(4);
    console.log("getting data 5....");
    await getdata(5);
 })();
*/
//fetch APIs...api(application programming interface)
//fetch api provides an interface for fetching (sending/recieving)resourses.
//it uses request and response objects.the fetch() methid is  use to fetch a resourse data.
//using async await
const URL="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#facts");
const btn=document.querySelector("#btn");
const getfacts=async()=>{
    console.log("getting data");
    let response=await fetch(URL);
    console.log(response);  //json format
    let data=await response.json();
    //console.log(data);
   // console.log(data[0].text);
   factpara.innerText=data[1].text;
}
btn.addEventListener("click",getfacts)
//json  is a javascript object notation
//json ()method:returns second promise that resolves with the result of parsing the response body text as json.(input is json ,output is js object).
 //http verbs (hyper text transfer protocols)...get,patch or delete
 //response status code are of different types (client error..400,200,server error..500)






     
    
    
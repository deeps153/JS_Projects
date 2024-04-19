"use strict";

console.log("hell😍 World...");

var array = [1,2,3,4,5];
// var lastremove = array.pop();
// console.log(array);
// var lastadd = array.push(6);
// console.log(array);
// var firstremove = array.shift();
// console.log(array);
// var firstadd =  array.unshift(12);
// console.log(array);
// var suarray = array.slice(-3,-1);
// console.log("slice ",array);
// var addrem = array.splice(2,1,13);

// console.log(array);
// console.log(lastremove);
// console.log(lastadd);
// console.log(firstremove);
// console.log(firstadd);
// console.log(suarray);
// console.log(addrem);


// *********** Object ********** //

// var student = {
//     name : "Deepika",
//     roll : 41,
//     address : {
//         place : "Bokaro steel city",
//         city : "Bokaro",
//         state : "Jharkhand"
//     }
// };

// var {name , roll , address} = student;  //object destructuring


// console.log(student["roll"]);
// console.log(student.address.state);
// console.log(address.place);


// *********** type of ****************

// var num = 10; 
// console.log(typeof(typeof num));


// *********** use strict ********

// "use strict";

// num = 11;
// console.log(num);


// ************* let , var , const ****************

//let , const = block scope
// var = function scope
// const a = [12, 13,15];
// a = [];  //Uncaught TypeError: Assignment to constant variable.
// a[0] = 16;
// console.log(a);

// a.push(16);

// console.log(a);


// const c = a;
// console.log(c);



// object+  function



// functions ***********************

//declatative functio 

function sum(a,b){
    return a+b;
}

console.log(sum(1,2));

//function expression

var sum1 = function(a,b){
    return a+b;
}

console.log(sum1(2,3));
//ARROW FUNCTION

var sum2 =(a,b)=>a+b; 

console.log(sum2(3,4));

function name(fname,lname){
    return (fname + " " + lname);
}
console.log(name("deeps","k"));

// *****

function name1(fname,lname){
 return {
    fname1 : fname,
    lname1 : lname
 }
}

var obj = name1("deepika","k");

console.log(obj.fname1 , obj.lname1);


// 8****************  DOM  **************8

//innerHtML(fetch all the data like tag+text inside the tag)
 //innertext(fetch only text)

 //querySelector
 //addEventListener


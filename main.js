// == and === difference
    //     var x="1234"
    //     var y=1234
    //    console.log (x==y) ;
    //    console.log (x===y);

// Spread Operator
       const NumberOne = [1,2,3,4,5]
       const NumberTwo = [6,7,8,9,10]
       const NumberCombined = [...NumberOne, ...NumberTwo]
       console.log(NumberCombined);

// Second Example
       let arr1 = [1,2,3,4,5,6,7,8]
       console.log(...arr1);


//   Rest Operator
       const [x,y,z, ...rest] = arr1
    //    console.log(x);
    //    console.log(y);
    //    console.log(z);
       console.log(rest);

//var
//  console.log(x);
// let x = 10;

// function outer (){
//  let x=10;
//     function inner(){
        
//         let x=20;
//         console.log(x);
//     }
//     return inner();
// }
// outer();

// FIRST CLSS FUNCTION

//1. Example |
// function to a variable
const temp = function() {
console.log("Hello World !!");
}
temp();
//Output: Hello World !!

//We assigned an Anonymous Function in a Variable, then we used that variable to invoke the
//function by adding parentheses () at the end.

// 2. Example | Pass a function as an Argument
function sayHello() {
return "Hello, ";
}
function greeting(helloMessage, name) {
console.log(helloMessage() + name);
}
// Pass “sayHello” function as an argument to “greeting” function
greeting(sayHello, "JavaScript!");
//Output: Hello, JavaScript!

//3. Example | Return a function
function sayHello() {
return function add() {
console.log("Hello!");
}
}
// In this example; We need to return “add” function from another function so add function will
// be first class function. We can return a function because we treated function in JavaScript as a
// value.

// CLOSERS

function outerFunc() {
       var outerVar = 100;
       function innerFunc() {
       console.log(outerVar);
       }
       return innerFunc;
       }
       var value=outerFunc();
       value();
       // Output: 100

       //CALL APPLY AND BIND EXAMPLE
    // CALL=>
       var emp1={
              name:"John",
              age:21
              }
              var emp2={
              name:"Smith",
              age:22
              }
              function invite(greeting1,greeting2){
              console.log(greeting1+" "+this.name+" "+greeting2)
              }
              invite.call(emp1,"Hi","How are you!")
             // Output: Hi John How are you!
   
          //   APPLY=>
//              apply(): The apply() method invokes a function in which first argument will be the object and
// rest of the arguments will be passed as an array of elements.

invite.apply(emp2,["hey dude," ,"how are you!"])
// Output: hey dude, Smith how are you!

// BIND=>
// bind: The bind() method returns a new function and this function will be having the reference
// of the object passed, now whenever you want to use this returned function in the code you can
// use it by passing rest of the arguments.

var inviteEmployee1=invite.bind(emp1);
var inviteEmployee2=invite.bind(emp2);
inviteEmploye1("hi","how are you")
inviteEmploye2("hey","how are you doing?")
// Output:
// hi John how are you
// hey Smith how are you doing?

// OBJECTS IN JS

let person = {
       firstName: 'John',
       lastName: 'Doe'
       };

   //  FUNCTION CONSTRUCTOR IN JS  
  
   function User (name, age) {
       this.name = name;
       this.age = age;
       }
       var user1 = new User('Bob', 25);
       var user2 = new User('Alice', 27);

       
   // CALLBACK
   
   function callbackFunction(name) {
       console.log('Hello ' + name);
       }
       function outerFunction(callback) {
       let name = prompt('Please enter your name.');
       callback(name);
       }
       outerFunction(callbackFunction);

       
  // ARROW FUNCTION
  
//    function expression
//    var x = function(x, y) {
//        return x * y;
//        }
//       // can be written as
//        // using arrow functions
//        var x = (x, y) => x * y;
      
       
       // CALLBACK HELL
       // async1(function(){
       //        async2(function(){
       //        async3(function(){
       //        async4(function(){
       //        ....
       //        });
       //        });
       //        });
       //        });

 //SELF INOVOKING FUNCTION
 
//  (function ()
// // logic here
// )();
// (function ()
// {
// var message = "IIFE";
// console.log(message); //IIFE
// }
// )();
// console.log(message); //Error: message is not defined


// SET TIME OUT 
// Syntax: setTimeout(()=>{
//        //code
//        }, time);
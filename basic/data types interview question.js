//interview

//#// primitive data type with corresponding return type

  //7 types(all call by value)
/*  
1)String==>"String"
2)Number==>"number"
3)Boolean==>"boolean"
4)null==>"object"
5)undefined==>"undefined"
6)Symbol
7)BigInt
*/

//#// refernce (non primitive)

// Array
//objects
//functions

// is javascript dynamically type or not?
//answer==it is dynamically types language. because we dont need the describe 
//the types of the variable at the time of declaration.

// symbol concept (it is use to provide uniqueness)

let a=Symbol('123');
let b=Symbol('123');
console.log(a==b);//false

//array
let arr=["vivek","guddu"];
console.log(arr);

//object

let obj={
    name:"sarthak",
    age: 22,
}
console.log(obj);

//function

let fun=function()
{
    console.log("hello");
}
console.log(fun);

    


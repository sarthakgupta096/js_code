let c = ["sarthak", "gupta", "vivek", "thakur", "sarthak"];

for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

console.log(c[0]);
console.log(c[4]);

//what is array?
//answer-->in js we can store multiply types of element in array.it is resizeable.

//array declarartin
/*
  let z=new Array(1,2,3,5,6,6);
  let n=[1,2,3,4,5,6,7,7];
  */
console.log(c);
let n = new Array(6, 5, 3, 6, 7, 9);

//Array's methods

/*
  push()=it is use to add elements in the current array at last position.
  syntax==>
      arrayname.push(element);
*/
n.push(10);
console.log(n);
/*
  pop()=it remove the last element of the array.
*/
console.log(n);
n.pop();
console.log(n);

/*
  unshift()==it add new element in the starting of array.
*/
console.log(n);
n.unshift(10);
console.log(n);

/*
   shift()=it remove the first element from the starting
*/
console.log(n);
n.shift(10);
console.log(n);

/*
 slice()==>it is use to print sub array according to the given condition
 syntax==>
    arr.splice(include,exclude)
*/
console.log(n);
console.log(n.slice(1, 4));
/*
 splice()==
 
*/
let x = ["sar", "hii", "viv", "poo"];
console.log(x);
console.log(x.splice(1, 2, "pii"));

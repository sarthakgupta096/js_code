
console.log(2>1);
console.log(2==2);
console.log(2!=1);

console.log("2">1);

//key important

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0)//true

//the rason is that an equilaty check == and comparison > < >= <= work differently /
//comparison convert null to a Number.treating it as 0.
//that's whuy (3) null>=0 and (1) null>0 is 0

console.log(undefined>0); //false
console.log(undefined==0);//false
console.log(undefined>=0);//false

//===

console.log("2"===2);// false it check both variable data type.


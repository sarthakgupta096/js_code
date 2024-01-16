const num=234;
 console.log(num);

 const num1=new Number(5346)
 console.log(num1);

 const str=console.log(num1.toString()); //converted into string

 console.log(num1.toString().length); //return string length

 console.log(num1.toFixed(2)); // it rounds the string to a specific number of decimal.

 console.log(num1.toLocaleString('en-IN'));

 //*************************************NUMBER*******************************************************

  console.log(Math.abs(-4));
  console.log(Math.max(6,9));
  console.log(Math.pow(6,3));
  
  console.log(Math.random()); //it always return the value betwwen 0-1.

  console.log(Math.floor((Math.random()*10)+1))// now it will generate integer numbers

  const min=1
  const max=6
  console.log(Math.floor(Math.random() *(max-min+1))+min); //it will generate value between range 1-6.

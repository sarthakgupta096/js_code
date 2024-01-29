
//*******************************function*******************************************

  //when we dont know how many parameter will get to the function then

  function calculatiorCartPrice(...num1) //... restof operator=it return array of input elements
  {
       return num1;
  }
  console.log(calculatiorCartPrice(5,6,8,78,58,58,58,78)); //[5,6,8,78,58,58,58,78]

  function calculate(val1,val2,...nums3) //interview questions
  {
    return nums3;
  }
  console.log(calculate(100,200,455,4555,4444,444));
  /*here 
       val1=100
       val2=455
       nums3=[455,4555,4444,444]
 */

 // how to pass object to the function

   const user=
   {
       username:"sarthak",
       age:"23",
       college:"tit",
       address:"rehli"
   }

  function handleObject(anyObject)
  {
      console.log("hii "+ anyObject.username +" my age is "+ anyObject.age);
  }
//handleObject(user);
handleObject({username:"surbhi",age:23});//direct objet pass manually written 

//how to pass array to the function

const arr=[10,20,30];
function returnsecondvalue(getArray)
{
    return getArray[1];
}
console.log(returnsecondvalue(arr));//20

 

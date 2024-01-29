
  function sum(num1, num2) {
  console.log(num1 + num2);
}
function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
function sum(num1, num2) {
  return num1 + num2;
}

sum(4, 6); //10
const a = sum(4, 6);
console.log("result:", a); //10
const b = sum(1, 2);
console.log(b);//3

function login(username="director")//default value set kari hai apan ne director yadi user
                                    //input nai dega toh director Bydafault set ho jayga
{
    if(username==undefined)
    {
        console.log("please enter  user name");
          return 
    }
    return username +" just logged in";
}

   console.log(login("sarthak"));//sarthak just login

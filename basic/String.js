/*
const name="sarthak";
console.log(name.length);
const repo=50;
console.log(name+repo);//out dated way

console.log('hello my name is ${name} and my repo ${repo;}');

console.log("hello");

const game=new String("  vivek  ");
console.log(name)
for(let i=0;i<game.length;i++)
{
    console.log(game[i]);
}
console.log(game.length);
console.log(game)
console.log(game.trim())
*/
//special method

//**ole.log(game.length()); //error
//substring()==>to find substring
const game=new String (" s a r t h a k");
console.log(game);
console.log(game.substring(0,3))
//slice()==>to slite the string
console.log(game);
console.log(game.slice(0,2));
//trim()==>to remove white spaces from both side of the String.
console.log(game.trim());
//include
console.log(game.includes('k')); //it check particular character present in the string or not

//split
console.log(game.split(" "));// it will split string by spaac delimiter




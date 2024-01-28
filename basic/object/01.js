let user={
    name:"aman",
    age:23,
    college:"tit",
    "address":"rehli"
}
console.log(user);
console.log(user.college);
console.log(user["age"]); ///23
console.log(user["address"]); // both are same
console.log(user.address);// both are same

// how to make any key as a symbol (vvvv.imp)

let address=Symbol("helllo sarhak");
let user1={
    name:"somya",
    age:19,
    [address]:"rehli"
}
 console.log(user1[address]);// { name: 'somya', age: 19, [Symbol(helllo sarhak)]: 'rehli' }
 Object.freeze(user1); // it make the user's all properties constant we cant change it
 user1.name="surbhi"
 console.log(user1);

 console.log('hello,${this.name}');

 const s={
       
      1:"somya",
      2:"gupta"
 }
   console.log(s);
 const t={
      3:"surbhi",
      4:"gupta"
 }
   console.log(t);

    const c={s,t};
    console.log(c);
    
  const d= Object.assign({},s,t);// merge two object
  console.log(d);
  //output==>{ '1': 'somya', '2': 'gupta', '3': 'surbhi', '4': 'gupta' }
  const e={...s,...t};//spread operator
  console.log(e);
  //output==>{ '1': 'somya', '2': 'gupta', '3': 'surbhi', '4': 'gupta' }

  //when we will work with database then ww gets output in the form of array of object

  let f=
  [
       {
          1:"sarang",
          age:"45"
       },
       {
        2:"survhi",
        name:"diksha"
       },
       {
        3:"vinay"
       },
       {
        4:"vandana"
       }
  ]

  console.log(f[0].age);//45
  console.log(Object.keys(t)); //[ '3', '4' ]
  console.log(Object.values(t));//[ 'surbhi', 'gupta' ]
  console.log(Object.entries(f));
  //output==>[
 /* [ '0', { '1': 'sarang', age: '45' } ],
  [ '1', { '2': 'survhi', name: 'diksha' } ],
  [ '2', { '3': 'vinay' } ],
  [ '3', { '4': 'vandana' } ]
]
*/
 console.log(t.hasOwnProperty(1));  //it will check particular proprty exit or not if present then 
   // yes otherwise no.
   

 


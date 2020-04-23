// const user = {
//   name: "Andrey",
//   age: 25,
//   isFat: false,
//   getName: function() {
//     console.log("i'm Andrey");
//   },
//   friends: {
//     bestie: "Vadim, Roma, Liza",
//     familiar: "Sasha, Nina, Lola",
//   }
// };

// // console.log(user.name);

// for (let key in user) {
//   console.log(user[key]);
  
// }

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = 60;

// console.log(a);
// console.log(b);

// let obj1 = {
//   name: "Ivan"
// };
// const obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.name = "Petia";

// console.log(obj1);
// console.log(obj2);

const user1 = {
  name: "Ivan",
  age: 25,
  isAdmin: false
};

const user2 = Object.assign({}, user1);

console.log(user1);
console.log(user2);

console.log(user1 === user2);

const user3 = { ...user1};
user3.age = 400;

console.log(user1);
console.log(user3);

const user4 = {};

for (const user4 in user1) {
  user4[key] = user1[key];
  
  
}





// console.log(user1 === user2)
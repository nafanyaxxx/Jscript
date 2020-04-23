// const user = {
//     isOnline: false,
//     name: "Peria"
// }

// const admin = {
//     isAdmin: true,
//     __proto__: user
// }

// const guest = {
//     isAdmin: false,
//     __proto__: user
// }

// for (const key in admin) {
//     if (admin.hasOwerProperty(key))
// }

// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   console.log(pockets.pen);
  

let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;

  const r1 = new Rabbit("1");
  const r2 = new Rabbit("2");
  const r3 = new Rabbit("3");
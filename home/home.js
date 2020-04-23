// 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

function CocaCola(volume, sugar, type) {
  this.volume = volume;
  this.isAlco = false;
  this.color = "black";
  this.mountOfSugar = sugar;
  this.type = type;
  this.name = "CocaCola";
};

function Pepsi(volume, sugar, type) {
  this.volume = volume;
  this.isAlco = false;
  this.color = "black";
  this.mountOfSugar = sugar;
  this.type = type;
  this.name = "Pepsi";
};

function Vodka(volume, color, type) {
  this.volume = volume;
  this.isAlco = true;
  this.color = color;
  this.mountOfSugar = 50;
  this.type = type;
  this.name = "Vodka";
};

const cola1 = new CocaCola(0.5, 600, "vanilla");

const pepsi1 = new Pepsi(0.5, 100, "black");

const vodka1 = new Vodka(0.7, "percovka");

console.log(cola1);

// const user = {
//     "facebook.com": "qwerty123456",
//     insta: "moldcolmdc",
//     vk: "edfewfwef",
// };

// const keys = Object.keys(user);

// const values = Object.values(user);

// const entries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log(user);

// // const { insta: passwordInstagram } = user;

// // passworsInstagram;

// const arr = [1, 5, 45, 47, 56, 7, 36, 21];

// const [firstelement, , b, ...rest] = arr;

// console.log(firstelement, b, rest);

// let options = {
//     title: "Menu",
//     width: "100",
//     height: "200",
//     friends: {
//         bestie: "bodik",
//         znakomi: "Vasia",
//         podruga: "Masha"
//     }
// };

// const date = new Date();
// console.log(date);

// const dateMilisec = new Date(1000 * 60 * 60);
// console.log(dateMilisec);

// const dataStr = new Date("2017-01-26");
// console.log(dataStr);

// let d = new Date(2012, 1, 20, 3, 12);
// alert( d );

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days [date.getDay()]
// }

// let date = new Date(2014, 0, 3);
// console.log(date);

function getLocalDay(date) {
    return date.getDay() ==  0  ? 7 : date.getDay();
    console.log(date);
    
}

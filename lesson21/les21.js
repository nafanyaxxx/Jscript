// console.log(window);

// var qqq = 1;

// const sayHello = () => {
//     console.log("hello");
// }

// console.log(1);
// console.log(2);

// const timeOut = setTimeout(() => console.log(sayHello), 2 * 1000)

// clearTimeout(timeOut)
// console.log(3);
// console.log(4);

// function printNumbers(from, to) {
//     let qq = from;

    setTimeout(function go() {
        console.log(qq);
        if (qq < to) {
            setTimeout(go, 2000);
        }
    }, 2000);


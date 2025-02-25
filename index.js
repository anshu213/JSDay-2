//Increment and Decrement operators..........................//................

//post increment............
let a = 20;
console.log(a++ , a); // 20,21


//pre increment.............
let b = 20;
console.log(++b , b); // 21,21

//post and pre increment...........
let c = 20;
console.log(++c ,c ,c++ ,++c ,c ,c++ ,c++ ,++c ,++c); // 21,21,21,23,23,23,24,26,27


//post decrement.............
let d = 20;
console.log(d-- , d); // 20,19

//pre decrement..............
let e = 20;
console.log(--e , e);// 19,19


//post and pre decrement..........................
let f = 20;
console.log(f-- ,f ,--f ,--f ,f-- ,f ,f ,f ,--f ,f-- ,f--); // 20,19,18,17,17,16,16,16,15,15,14

//increment and decrement both.......................
let g = 20;
console.log(++g ,g ,--g ,g-- ,g-- ,g ,g ,g-- ,g++ ,++g ,++g ,g++ ,--g);//21,21,20,20,19,18,18,18,17,19,20,20,20


//Logical operators....................//.......................
//and operator...............
let h = 15;

let i = 20;
console.log(h > i && i < h);  //false
//.....................................//...............................................

let j = 15;

let k = 20;
console.log(j === k && j == k); //false
//.........................................//....................................

let l = 20;

let m = 20;
console.log(l === m && l == m ); //True
//........................................//.......................................

let n = 20;

let o = "20";
console.log(n !== o && n == o); //True


//Or operator..............
let p = 20;
let q = "20";
console.log(p === q || p == q); //True

//Conditional or Ternary Operator....................................................
console.log((5 === 5) ? "a" : "b") ; //a
console.log((10 === "10") ? "x" : "y"); //y


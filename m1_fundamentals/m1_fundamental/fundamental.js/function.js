// function square(a) {
//     let b= a*a
//      console.log("square is" , b)
// }
// square(6);
// square(4);
// square(2);
// square(9);

// function greaterThan(a,b) {
//     if( a > b) {
//         console.log( a +" is greater than "+ b)
//     }
//     else {
//         console.log(b+ " is greater than " + a)
//     }
// }

// greaterThan(10,5)
// greaterThan(5,100)
// greaterThan(50,10)
// greaterThan(10,500)

// function myName(f,l) {
//     console.log("My name is " + f + " " + l)
// };
// myName("abdullahi", "hagi"); 


// function date(m, d) {
//     console.log("The month is", m + " and the date is " + d)
// };
// date("June" ,"27");


// function location(p, c) {
//     console.log("The province is", p+ " and the city is", c)
// };
// location("Ontario","Ottawa")


// function welcome(greeting) {
//     console.log(greeting)
// };
// welcome("hello world")


// function div(a) {
//     let b= a/2
//     console.log(b)
// };
// div(10)


function add(a, b) {
    let c= a+b
    console.log(c)
}
add(10,5)


function minus(a,b) {
    let c= a-b
    console.log(c)
} 
minus(10,5)


function multiply(a,b) {
    let c= a*b
    console.log(c)
}
multiply(10,5)


function divivde(a,b) {
    let c= a/b
    
    if(a ==0 || b == 0) {
        console.log("None of the params can equal zero")
    }
    else {
        console.log(c)
    }
}
divivde(0,5)
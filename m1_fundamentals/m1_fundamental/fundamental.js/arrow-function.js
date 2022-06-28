
// const area= (l,w) => {
//     res= l*w
//     return res
// };

// console.log(area(10,5));
// console.log(area(10,50));


// Question 1: Create an arrow function that takes parameters First and Last
// Name, then log the following msg to the console: "My name is (first name)
// but I prefer you call me mr/mrs (last name)

let myName = (fn,ln) => { 
    console.log("My name is", fn, "but i prefer if you call me Mr. ", ln)
}
myName("abdullahi","hagi")


// Question 2: Create an arrow function that takes parameters Province, City
//       and Name, then log the following msg: "My name is (Name) and I live in
//       (Province), in the city of (City)

 let info = (p, c, n) => {
     console.log("My name is", n, "and i live in the province",p, "in the city of ", c)
}

info("Ontario","Ottawa","Brenda");


// Question 3: Create an arrow function that multiplies 2 numbers and returns
// the number after subtracting it by 2

let result = (a,b) => {
    let c = a*b
    let d = c-2
    console.log("The answer is", d)
}

result(2,4)


// Question 4: Create an arrow function that divides 2 numbers and returns
//       the number after adding 2 to it

let result2 = (a,b) => {
    let c = a/b
    let d = c+2
    console.log("The answer is", d)
}

result2(2,4)
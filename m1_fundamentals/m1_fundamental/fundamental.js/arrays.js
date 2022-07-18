// let marks = [10,20,30,40,50];

// console.log(marks[3]);

// let fruit = ["apple", "orange", "banana", "mango"]
// console.log("here is a list of fruits:",fruit);

// Create an array with 3 names then console.log the array length

// let list = ["abdullahi", "brenda", "carter"];
// console.log(list.length)

// console.log(list[0])

// let arr1= [1,2,3,4,5,6,7,8,9];

//  for (let i=0; i<arr1.length; i++) {
//   console.log(arr1[i] * arr1[i])
// };


// let arr2= [1,2,3,4,5,6,7,8,9];
// let num= 7

//  for (let i=0; i<arr2.length; i++) {
//   if (num=arr2[i]) {
//     console.log(i)
//   }
// };


// Remove an item from an array using pop() method//

// const words =  ["cat", "dog"];
// console.log(words.pop(1));

// Question 4: Create the following array: ['burger', 'fries', 'coke',
//       'donuts', 'salad', 'nuggets'], then remove the first 3 elements, and then
//       add them back on at the end Hint: Variables are like boxes


// let food= ['burger', 'fries', 'coke','donuts', 'salad', 'nuggets']

// let food2= food.splice(0,3);

// console.log(food2)
// console.log(food)

// food.splice(3,5,'burger', 'fries', 'coke')

//  console.log("the new list is",food)


// Question 1: Create the following array [10, 20, 30, 40, 50, 60, 70, 80,
//     90, 100,] then using filter method, create a new array that has numbers
//     over 40


let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,];
let filtered = arr1.filter(element => element >40);
console.log(filtered)


// Question 2: Create the following array ['ice cream', 'cookies',
//       'pancakes'] then using forEach method, console log the phrase: "I love
//       (array item). Your log should look like: "I love ice cream, I love
//       cookies" etc

const like=['ice cream', 'cookies', 'pancakes'];
like.forEach(element => {
    console.log("I Love",element);
})


// Question 3: Create the following array ['user1', 'user2', 'user3'] then
// using map method, create a new array that replaces the users with the
// names 'mark', 'mike', 'milo'

let arr2= ['user1', 'user2', 'user3'] ;

let mapped = arr2.map(element => element + 'mark'+ 'mike'+ 'milo')
 console.log(mapped)

 //stevens answer below
 let users= ['user1', 'user2', 'user3']

let username = users.map(i => {
    if (i == 'user1') {
        return 'Mark';
    }
    if (i == 'user2') {
        return 'Mike'
    }
    if (i == 'user3') {
        return 'Milo'
    }
    return i;
} );
console.log(username)



//  Question 4: Create the following array: [2, 2, 2, 2,], then add all the
//       array items together using the reduce method

 const numbers = [2, 2, 2, 2];

 function sum_reduce(accumulator, currentValue) {
   return accumulator + currentValue;
 }
 
 let sum = numbers.reduce(sum_reduce);
 console.log("sum:",sum);


 /*
1.
let arr = ["Hello", "What", "Are", "You"]

Find the length of each string in the array
Do once with forEach
Do once without forEach
*/

let arr = ["Hello", "What", "Are", "You"]

//with forEach
arr.forEach(element => {
    console.log(element.length);
});

//without forEach
for (let i=0; i<arr.length; i++) {
   console.log(arr[i].length)
};



/*
2.
let numArray = [13, 84, 21, 58, 41, 20, 63]

Using filter, create a new array that includes every number under 50
Then console.log your new array
Do once with filter
Do once without filter
*/
let numArray = [13, 84, 21, 58, 41, 20, 63];

//with filter
let filtered1 = numArray.filter(element => element <50);
console.log(filtered1)

//without filter
if(numArray<50){


};

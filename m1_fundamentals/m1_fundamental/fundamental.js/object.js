// let student = {
//     id:"1",
//     name:"John",
//     address: {
//         province: "New York",
//         city: "New York",
//         country: "USA",
//     },
//     email: "john@gmail.com",
//     phone: "123-456-7890",
//     marks: [20,45,30,12],
// };

// console.log('My name is', student.name, 'and my id is', student.id, 'and i live in', student.address.country, 'and my mark is', student.marks[1])

//  Question 1: Declare an object named User with the keys: username, password, email, id. Then console log the value of each

let User= {
    username: "Abdullahi",
    password: "password123",
    email: "abudllahi@gmail.com",
    id: "001",
};

console.log(User);

// Queston 2: Declare an object that has three key value pairs, "firstName",
// "lastName" and "score" console.log() there name, and there score in a
// sentence then console.log() the object and check it out in the console

let obj1 = {
    firstName: "Abdullahi",
    lastName: "Hagi",
    score: "100",
};

console.log("My name is", obj1.firstName, "and my last name is", obj1.lastName, "and my score is", obj1.score);
console.log(obj1);

// Question 3: Declare an object named Car with the keys: make, model, year,
// milaeage, and 2 methods: turnOn()-that has the string "The car has been
// turned on" and turnOff()-that has the string "The car has been turned
// off". Then console log each key


let car = {
    make:"Honda",
    model: "Civic ",
    year: "2015", 
    milaeage: "100k ", 
}; 

console.log()

/*
4.
Write an object that has two objects inside it named "test0" and "test1"
inside both objects write the keys "testName", "numParticipants", and "testPass"
fill the values as you want with testName being a string, numParticipants being a number, and testPass being a boolean

check both tests using for in
if it passed console.log(testName, "Passed with", numParticipants, "participants")
if it failed console.log(testName, "Failed with", numParticipants, "participants")

then console.log() your object
*/

let test = {
    test0: {
        testName: "person1",
        numParticipants: 5,
        testPass: true,
    },

    test1: {
        testName: "person2",
        numParticipants: 50,
        testPass: false,
    }
}


// // if(test0 = true) {
// //     console.log(test0.testName, "Passed with", numParticipants, "participants")
// // }

// // else{
// //     console.log(test0.testName, "Failed with", numParticipants, "participants")
// }
for(let key in test){
    if (test[key]["testPass"] == true)
    console.log(test[key]["testPass"]);

    else test[key]["testPass"] == false
    console.log(test[key]["testPass"]);
	}

    console.log(testName, "Passed with", numParticipants, "participants")   
    console.log(testName, "Failed with", numParticipants, "participants")
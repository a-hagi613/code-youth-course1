//Loops question 1 
for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  //question 2
  for (let i = 10; i >= 0; i--) {
    console.log(i)
  }
  //question 3
  for (let i = 0; i < 5; i++) {
    console.log("For loops are easy")
  }
  //question 4
  let fruits = ["apple", "orange", "banana", "mango"];
  for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
  }
  //question 5
  let greet = "hello"
  for (let i=0; i<greet.length; i++) {
    console.log(greet[i])
  }
  //question 6
  let empty = [""]
  for (let i =0; i < empty.length; i++) {
    empty[0]= "I"
    empty[1]= "filled"
    empty[2]= "this"
    empty[3]= "using"
    empty[4]= "javascript"
  }
  console.log(empty)

  //If statements question 1
  let num = 1
  let num2= 2
  if (num > 1 ) {
    console.log("This number is greater than 1")
  }
  else {
    console.log("This number is less than 1")
  }
  //question 2
  if (num < 1 ) {
    console.log("This number is less than 1")
  }
  else {
    console.log("This number is greater than 1")
  }
  //question 3
  if (num2 = 2 ) {
    console.log("This number is equal to 2")
  }
  else {
    console.log("This number is not equal to 2")
  }
  //question 4
  let pass= 5
  if (pass >= 7) {
    console.log("Password accepted")
  }
  else {
    console.log("Error! Password too short")
  }
  //question 4
  let cart = ['milk', 'eggs', 'bread', 'chciken']
  if (cart < 5) {
    console.log("Please pay full amount")
}
else {
    console.log("Please remove items")
}
//question 5
let grade = 87
if(grade  >= 80 && grade <=100) {
    console.log("You got an A")
}
else if(grade >=70 && grade <=79) {
    console.log("You got an B")
}
else if(grade >= 60 && grade <=69) {
    console.log("You got an C")
}
else if(grade >=50 && grade <=59) {
    console.log("You got an D")
}
else {
    console.log("You failed")
}

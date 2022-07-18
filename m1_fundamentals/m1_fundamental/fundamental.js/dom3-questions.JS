//warmup exercise (for loops)
for (let i=0; i<10; i++) {
   console.log(i)
};

//question 1
for (let i=0; i<6; i++) {
   console.log(i)
};

//question 2
let num =0;
for (let num=0; num<=100;num+=5) {
   console.log(num)
};

//question 3
for (let i=0; i<5; i++) {
   console.log(`Loop Iterations ${i}`)
};

//question 4
for (let i=0; i<8; i++) {
   console.log(`I am on loop ${i}, Please wait for me to finish`)
};
console.log("Ok the loop is finished");


// question 1 (if else)
let isSignedIn = false;

if (isSignedIn = true) {
   console.log("You're already signed in")
}

else {
   console.log("Ok lets sign in")
};

//question 2
let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);
console.log(num1,num2)

if (num1>num2) {
   console.log("num1 is greater than num2")
}

else if (num1==num2) {
   console.log("num1 and num2 are equal")
}

else {
   console.log("num1 is less than num 2")
};

//question 3
let button1 = false
let button2 = false
let button3 = false;

if (button1==true && button2||button3== true) {
   console.log("Continue")
} 

else {
   console.log("Missing and input")
};
    
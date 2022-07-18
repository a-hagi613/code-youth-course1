
1.
//Copy this code vvv and paste above where you answer the question//

let temperature = Math.floor(Math.random()*100)

//Copy this code ^^^ and paste above where you answer the question//

// Write an if statement where if temperature is less than or equal to 30, or greater than or equal to 70 you console.log(`Critical Temperature: ${temperature}°C`)
// Otherwise console.log(`Stable Temperature: ${temperature}°C`)

// ! for this exercise only use one if and one else
// */

/
2.
//Copy this code vvv and paste above where you answer the question//

let check1 = true
let check2 = true
let check3 = false
let check4 = true

//Copy this code ^^^ and paste above where you answer the question//

// Using the code below reduce the ammount of if, else if, and else statements below using the logical operators


if(check1 === true){
    if(check2 === true){
        if(check3 === true){
            console.log("Passed")
        }else if(check4 === true){
            console.log("Passed")
        }else{
            console.log("Failed")
        }

        if(check3 === false){
        }else if(check4 === true){
            console.log("Passed")
        }
        
    }else{
        console.log("Failed")
    }
}else{
    console.log("Failed")
}

// hint: You only need to use one if, and one else

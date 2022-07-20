////////////////////////////// ~ jQuery ~ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Question 1
/*
Using jQuery create a div that has a width of 100%, height of 10rem, and a border
Give it a class
Append it to the body
*/


// Question 2
/*
Using jQuery add a keypress event listener to the body
When you press a key append a p tag with the letter you typed into the div from question 1
The p tag should display inline and have a font size of 10rem

!Hint: remember (event)

!!Hint: .originalEvent
*/


// Question 3
/*
    <table border="1" style="width: 5rem; height: 5rem" class="myTable">
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>

    Copy and paste this HTML into your HTML file

    Using jQuery put a random number from 0 - 10 inside each table cell

    !Difficulty Tweak: Make it so no two cells can have the same number
*/



// Question 4
/*
<p class="copyMe">Click me to copy</p>

copy and paste this into your html
Add a click event listener
Every time you click on the p tag the text should be copied to your clipboard
(You will probably need to google)
*/





//////////////////////////////////// ~ fetch - apis ~ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Question 1
/* 
'https://jsonplaceholder.typicode.com/users'

fetch the link above and console.log the name of everyone that you get back
*/


// Question 2
/*
'https://jsonplaceholder.typicode.com/users'

fetch the link above(you can use the fetch from the last question)
For every name that starts with the letter C create a p tag with the name and append it to the body
*/


// Question 3
/*
'https://jsonplaceholder.typicode.com/users'

fetch the link above(you can use the fetch from the last question)
Create a small profile div that has all this information for each person:
name
phone number
email
city
website(as a link)
*/


fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.json())
.then( resp =>{
    // Question 1
    resp.forEach(element => {
        console.log(element)
    });

    //Question 2
    resp.forEach(element =>{
        if(element.name.slice(0,1) == "C"){
            $("body").append($("<p/>").text(element.name))
        }
    });

    //question 3
    let profileBox = $("<div/>").css({"width":"80vw","height":"auto","border":"1px solid"})
    resp.forEach(element =>{
        let pName = $("<p/>").text(element.name)
        let pInfo = $("<ul/>").append($("<li/>").text(element.email).addClass("eMail"), $("<li/>").text(element.phone), $("<li/>").text(element["address"].city))
        let wSite = $("<a/>").text(element.website).attr({"target":"_blank","href":""})
        let pDiv = $("<div/>").css({"border":"1px solid"}).append(pName, pInfo, wSite)
        $(profileBox).append(pDiv)
    })
    $("body").append(profileBox)
})
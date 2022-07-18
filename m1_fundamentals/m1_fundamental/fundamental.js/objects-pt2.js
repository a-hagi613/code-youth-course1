// const book = {
// title: "The Hobbit",
// author: "JRR Tolkien",
// alreadyRead: true,
// display: function() {
//     return "The book is titled "+ this.book.title +  "and the author is " + this.book.author
// },
// }


// if(book.alreadyRead = true) {
//     console.log("You have already read ", book.title, "by", book.author)
// }
// else {
//     console.log("You still need to read", book.title, "by ", book.author)
// };



const books = [
    { title: "The Great Gatsby",
    author: " F. Scott Fitzgerald",
    alreadyRead: true,
    },

    {title: "To Kill a Mockingbird",
    author: "Harper Lee",
    alreadyRead: true,
    },

    {title: "1984",
    author: "George Orwell",
    alreadyRead: false,
    },
]


for(let i=0;i<books.length;i++){
	console.log(books[i]);


if(books[i].alreadyRead == true) {
    console.log("You have already read ", books[i].title, "by", books[i].author)
}
else {
    console.log("You still need to read", books[i].title, "by ", books[i].author)
};
}



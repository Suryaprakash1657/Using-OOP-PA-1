
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`"${this.title}" has been borrowed.`);
        } else {
            console.log(`"${this.title}" is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`"${this.title}" has been returned.`);
    }
}

// User class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`${this.name} can't borrow "${book.title}" — already borrowed.`);
        }
    }

    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}".`);
        }
    }
}
const book1 = new Book("1984", "George Orwell", "123456");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "654321");

const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);
user1.borrow(book1);
user2.borrow(book1);
user2.borrow(book2);
user1.return(book1);
user2.borrow(book1);
user1.return(book2);

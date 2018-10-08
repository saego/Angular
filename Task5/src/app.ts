showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//task2.1
enum Category {"JavaScript", "CSS", "HTML", "TypeScript", "Angular"}

//task3.2
function getAllBooks(): Book[]{
    let books = [
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', avaliable: true, category: Category.JavaScript},
        {id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', avaliable: false, category: Category.JavaScript},
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', avaliable: true, category: Category.CSS},
        {id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', avaliable: true, category: Category.JavaScript}
];
    return books;
}

//task1.2
function logFirstAvaliable(books: any[]){
    console.log(`The length of arrary books is: ${books.length}`);
    for (const book of books) {
        if(book.avaliable){
            console.log(`First avaliable book's title is: ${book.title}`);
            break;
        }
    }
}

//task2.3
function getBookTitlesByCategory(category: Category): Array<string>{
    let titles: Array<string> = new Array;
    getAllBooks().forEach(book => {
        if(book.category == category){
            titles.push(book.title);
        }
    });
    return titles;
}

//task2.4
function logBookTitles(bookTitles: Array<string>){
    console.log(`Titles in category: ${bookTitles}`);
}

//task3.1&3.8
interface Book{
    id: number;
    title: string;
    author: string;
    avaliable: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

//task3.3
function printBook(book: Book){
    console.log(`Book title: ${book.title}, was written by ${book.author}`)
}

//task3.4
const myBook: Book = {
    id: 92,
    title: 'Colours, backgrounds and gradients',
    author: 'Eric A.Mayer',
    avaliable: true,
    category: Category.CSS, 
    pages: 200, 
    markDamaged: reason => console.log(`Damaged: ${reason}`)
};

logFirstAvaliable(getAllBooks());

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//task3.5
printBook(myBook);
myBook.markDamaged('missing back cover');

//task4.1
interface Librarian{
    name: string;
    email: string;
    department: string;
    assistCustomer: (custName: string) => void;
}

//task4.2
class UniversityLibrarian implements Librarian{
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string){
        console.log(`${this.name} is assisting by ${custName}`)
    }
}

//task4.3
const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Johnathan';
favoriteLibrarian.assistCustomer('Tomas');

//task5.1
class ReferenceItem{
    /*title: string;
    year: number;

    constructor(newTitle: string, newYear: number){
        this.title = newTitle;
        this.year = newYear;
    }
    */
   
    //task5.4
    private _publisher: string;
    //task5.5
    static department = 'IT';
   
    //task5.3
   constructor(public title: string, protected year: number){
        console.log(`title: ${this.title} was published in year: ${this.year}`);
    }


    get publisher(){
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher){
        this._publisher = newPublisher;
    }

    printItem(): void{
        console.log(ReferenceItem.department);
    }
}

//task5.2
const ref: ReferenceItem = new ReferenceItem('ITEA Academy', 2014);
// ref.printItem();

ref.publisher = 'Mark';
console.log(ref.publisher);
console.log(ref.printItem());

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//task2.1
enum Category {"JavaScript", "CSS", "HTML", "TypeScript", "Angular"}

//task1.1 & 2.2
function getAllBooks(){
    let books = [
        {title: 'Refactoring JavaScript', author: 'Evan Burchard', avaliable: true, category: Category.JavaScript},
        {title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', avaliable: false, category: Category.JavaScript},
        {title: 'CSS Secrets', author: 'Lea Verou', avaliable: true, category: Category.CSS},
        {title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', avaliable: true, category: Category.Angular}
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

logFirstAvaliable(getAllBooks());

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

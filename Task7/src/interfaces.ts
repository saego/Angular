import {Category} from "./enums";
//task7.2
interface Book{
    id: number;
    title: string;
    author: string;
    avaliable: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

interface Librarian{
    name: string;
    email: string;
    department: string;
    assistCustomer: (custName: string) => void;
}

export {Book, Librarian}
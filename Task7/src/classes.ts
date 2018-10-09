import {Librarian} from "./interfaces";

class ReferenceItem{
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

class UniversityLibrarian implements Librarian{
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string){
        console.log(`${this.name} is assisting by ${custName}`)
    }
}
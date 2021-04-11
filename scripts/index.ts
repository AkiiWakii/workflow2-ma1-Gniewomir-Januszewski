// Question 1
let twoTypes: ( number | boolean) [];

//Question 2
let tuple: [boolean, string, number];

//Question 3
function getFullName(firstName: string, lastName: string):string {
    return `${firstName} ${lastName}`;
}

//Question 4

interface persona{
    name: string;
    age: number;
    jobTitle: string;
}

//Question 5
enum members{
 Paid,
 Unpaid,
 Unknown,
}

//Question 6
class Person {
    name: string;
    
    constructor(personName: string) {
        this.name = personName;
    }
    
    displayName(){
        return "My name is " + this.name;
    }
}

//Question 7
type strBool = string | boolean;
type numStr = number | string;
type Details = { id : numStr, status: strBool}

function getDetails(name: strBool, details: Details){}
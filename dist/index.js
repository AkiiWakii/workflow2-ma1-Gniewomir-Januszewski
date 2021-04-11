// Question 1
let twoTypes;
//Question 2
let tuple;
//Question 3
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
//Question 5
var members;
(function (members) {
    members[members["Paid"] = 0] = "Paid";
    members[members["Unpaid"] = 1] = "Unpaid";
    members[members["Unknown"] = 2] = "Unknown";
})(members || (members = {}));
//Question 6
class Person {
    constructor(personName) {
        this.name = personName;
    }
    displayName() {
        return "My name is " + this.name;
    }
}
function getDetails(name, details) { }

let name = 'Moon'; //string literal
let age = 30; // number literal 
let isApproved = true; // Boolean literal : true or false
let firstName = undefined;
//variable 'person' is a key, 'Mosh' is a string
let person = {
    name: 'Mosh',
    age: 30
}; //curly braces are object literal

//dot notation
person.name = 'John';

//bracket notation
person['name'] = 'Mary';

//array is an object 
let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';


//function, name is a perimeter- performing a test
function greet(name, surName) {
console.log('Hello ' + name + ' ' + surName);
}

//calculates a value
//greet value argument

//function square(number){
  // return number * number;//
//}//

//console.log(square(2));//
document.getElementById('greeting').textContent = greet;



//static cannot be changed, dynamic can be changed
// cannot be a reserved keyword
// variable name should be meaningful 
// variable name cannot start with a number
// cannot oontain space or hyphen (-)
// names are case-sensitive 

let score = 0;

const headerTag = document.querySelector ("h1")

headerTag.addEventListener("click", function() {
    score = score + 1
} );

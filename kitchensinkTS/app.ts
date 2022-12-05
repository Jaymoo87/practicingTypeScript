var firstName: string = 'Justin';
const states: number = 50;

var sum: number = add(5, 4);
console.log(sum);

// The function "add" uses the variable 'sum' to recieve the data for "num1" and "num2"//
// to complete the assinged function. In this case it is num1 + num2.//

function add(num1: number, num2: number): number {

    return num1 + num2;
};



sayHello("Hello World!")

function sayHello(value: string) {
    console.log(value)

}

// The checkAge function evaluates the data put into each callback and executes a 
// message if the parameters are met. 



checkAge<Iperson>('Charles', 21)
checkAge<Iperson>('John', 17)
checkAge<Iperson>('Abby', 27)
checkAge<Iperson>('James', 18)


function checkAge<T>(names: string, age: number) {



    if (age <= 20) {

        console.log('Sorry' + " " + names + ", you aren't old enough to view this page.");

    }

}

// While(condition) creates a loop that stops after you add and increment counter (i++)

let veggies: string[] = ['Asparagus', 'Green Beans', 'Onions', 'Bell Peppers', 'Zucchini']
let i = 0;

while (i < veggies.length) {
    console.log(veggies[i])
    i++;
}

// Console.log(pet) logs the defined obeject 'pet'. The object has mutliple values

interface Ipet {
    name: string
    breed: string
}
 
let pet: Ipet = {

    name: 'Mr. Saturday',
    breed: 'Chocolate Lab',
}

console.log(pet)

interface Iperson {
    name: string, 
    age: number
}

let person1: Iperson = {

    name: 'Susan',
    age: 20,
}

let person2: Iperson = {

    name: 'Daniel',
    age: 24,
}

let person3: Iperson = {

    name: 'Xavier',
    age: 28,
}

let person4: Iperson = {

    name: 'Tori',
    age: 19,
}

let person5: Iperson = {

    name: 'Dawn',
    age: 21,
}

let people: Iperson[] = [person1, person2, person3, person4, person5]

let a = 0

while (a < people.length) {
    
    checkAge(person1.name, person1.age)
    checkAge(person2.name, person2.age)
    checkAge(person3.name, person3.age)
    checkAge(person4.name, person4.age)
    checkAge(person5.name, person5.age)
    break;
    
    
}

function getLength(girth: string) {

    console.log(girth.length)
}

getLength('Hello World')


let girth = 11

console.log('The world is an odd place!')





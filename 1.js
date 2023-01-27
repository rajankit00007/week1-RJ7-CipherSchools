//Types of variable

//const
//const myName = [];
//console.log(myName);
//myName.push("Alex");
//console.log(myName);

//let
//let myName ="John";
//console.log(myName);
 //myName="alex";
//console.log(myName);

//var
// var myName ="John";
// console.log(myName);
// var myName="alex";
// console.log(myName);
// myName=5;
// console.log(myName);


//String Interpolation

// let firstName = "Ankit";
// let lastName = "Raj";
// let fullName = firstName+ " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(firstName+ " " +lastName);

 

// Default parameters

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// console.log(addTwoNumbers(1,2));


// let addTwoNumber = (num1,num2) => num1+num2;
// console.log(addTwoNumber(1,2));

// let addTwoNumber = (num1,num2=5) => {
//        console.log(num1);
//        console.log(num2);
//     return num1+num2;
// };

//  console.log(addTwoNumber(1,2));
//  console.log(addTwoNumber(1));

// Rest and spread operator

// let array=[10,20,30,40,50];

//spread(to expand) ->...(three dot)
// let newArray = [...array,45,55,66];


// console.log(...array);
// console.log(array);
// console.log(...newArray);

//rest operators

// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for (let number of numbers) {
//         maximum = Math.max(maximum, number);
//         }
//         return maximum;
// };
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

//for object
// let object = {
//     name: "John",
//     age: 24,
//     address: {
//         city: "New York",
//         state: "NY",
//         country: "USA",
//     },
   
// };
// let object2 = JSON.parse(JSON.stringify(object));
//let object2 = {...object };
// object2.address.city = "Newark";
// console.log(object);
// console.log(object2);






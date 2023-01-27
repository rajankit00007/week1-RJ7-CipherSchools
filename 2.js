// // .map()
// let array = [1,2,3,4,5];
// let newArray =[];
//  for (let i=0;i  < array.length; i++){
//     newArray[i]= array[i]*array[i];
//  }
//  console.log(newArray);


// let array = [5,10,15,20,30];
// let functionForMap = (element) => element * element;

// let newArray = array.map(functionForMap);
// console.log(newArray);


// //.foreach()
//  let array  = [1,2,3,4,5];
//  array.forEach(element => {
//     element*=element;
//     console.log(element);
//  }
//  );
//  console.log("Array is= ", array);


//  //.filter()
//   let array = [10,20,30,40,50];
//   let newArray=array.filter((element) => element >= 30);
//   console.log(newArray); 

// //.find()
//   let array =[10,20,30,40,50];
//   let temp= array.find((value) =>{
//     return value > 20;
//   });
//   console.log(temp);


//   //.sort()
//   let array = [50,40,60,30,20,10,111];
//   let sortedArray=array.sort((el1,el2)=> {
//     el1 =Number(el1);
//     el2= Number(el2);
//     return el1-el2;
//   });
//   console.log(sortedArray);

//   // Object Destructuring

//   let details ={
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//         passportNumber: "JADHC23834756",
//      },
//     },
//   };
// //   let myName=details.name;
// //   let age=details.age;
//   let{name: myName,age } = details;
//   console.log(myName,age);


//   //Array matching
//   let obj1 = {name: "Ankit", age: 24};
//   let obj2 = {name: "Ankit"};

//    function areEqual(obj1,obj2) {
//      if (obj1 === obj2) {
//         return true;
//      }
//      if(Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//      }
//      for(let key of Object.keys(obj1)){
//         if(typeof obj2[key] === "undefined"){
//             return false;
//         }
//         if( obj2[key] !== obj1[key]){
//             return false;
//         }
//      }
//      return true;
//    }
//    console.log(areEqual(obj1,obj2));


// Map and Set

//Map
// let map = new Map();
// map.set(1, "Ankit");
// map.set(2, "Alex");
// console.log(map);
// map.values();

//Set()
// let set = new Set();
// set.add(1);
// set.add(2);

// console.log(set);



// Class
class Animal{
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.color=color;
        this.noOfLegs=noOfLegs;
        this.family=family;
        this.sound=sound;

    }
    showAnimal(){
    console.log(`The animal belongs to family ${this.family}`);
}
}

let animal = new Animal(4,"brown","rodent", "Phew Phew");
animal.showAnimal();
// console.log(animal);



  


// let n=10;
// function testFunction(a){
//     console.log(a);
// }
// function demofunction(){
//     let b=n+10;
//     testFunction(b);
// }

// demofunction();
  

function  demoFunction(){
    return[1,2];

}
let [abc,def] = demoFunction();
console.log(`ABC: is ${abc} and DEF is ${def}`);
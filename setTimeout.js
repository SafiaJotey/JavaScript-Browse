console.log("I am first");
console.log("I am second");
setTimeout(()=>{
 console.log("I am third");
},5000);
console.log("I am fourth");

setTimeout(()=>{
    console.log("I am fifth");
},4000);
console.log("I am sixth");
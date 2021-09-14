console.log("I am first");
console.log("I am second");
let count=0;
timeId=setInterval(()=>{
   
   
   if (count<15) {
    console.log(count++);//increment after print
   }
   },5000);
for(let i=0; i<100; i=i+10){
    console.log(i);  
}
console.log("I am third");
console.log("I am Fourth");
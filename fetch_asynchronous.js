console.log("I am first");
console.log("I am second");
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
for(let i=0; i<100; i=i+10){
    console.log(i);  
}
console.log("I am third");
console.log("I am Fourth");
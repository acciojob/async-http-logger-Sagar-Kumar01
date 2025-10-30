//your JS code here. If required.
let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
let dataobj = await data.json();
console.log(dataobj);


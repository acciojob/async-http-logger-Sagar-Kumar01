//your JS code here. If required.
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(data => data.json())
.then(dataobj => console.log(dataobj))
.catch(()=>{console.log("err")})


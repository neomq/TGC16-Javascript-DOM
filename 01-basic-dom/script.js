/* this is a browser-based JavaScript */
// what is different?
// - no modules
// - no file io
// - no yarn or npm

// document is a variable that
// has been predefined by the browser
// to be the DOM

// no need to use the functions below
// let h = document.getElementById('title');
// console.dir(h);
// h.innerHTML = "My Don't Tos";

// let li = document.getElementsByTagName('li');
// console.log(li);

// to select the <h1#title>
let header = document.querySelector('#title');
console.dir(header);
// return the FIRST element with the class `important`
let firstTodo = document.querySelector('.important');
firstTodo.style.backgroundColor = "red";
firstTodo.style.fontFamily = "Verdana";
firstTodo.style.fontSize = "32px";

// select all the <lis>
let allTodos = document.querySelectorAll('li');

let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let title = document.querySelector('#title');
    title.innerHTML = "Goodbye world";
    title.style.color = "red";
} )
function sayHello() {
    document.querySelector('#title').innerHTML = "hi there";
}

document.querySelector("#hello").addEventListener('click', sayHello);
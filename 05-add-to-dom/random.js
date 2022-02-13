
let names = ['Abel', 'Cain', 'Ben', 'Fredrick', 'Simon', 'Kelvin', 'Mandy'];

let btn = document.querySelector('#btnAdd');
btn.addEventListener('click', function () {
    let number = Math.floor(Math.random() * 100 + 1);
    let numberList = document.querySelector('#numbers');
    // works but almost impossible to add an event listener to the <li>
    // that we just created
    numberList.innerHTML += `<li>${number}</li>`;
})

document.querySelector('#btnAddName')
    .addEventListener('click', function () {
        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];

        // createElement takes in one parameter
        // which is the tag name of the element
        let nameElement = document.createElement('li');
        // the nameElement is the same type element object
        // that you get via querySelector or getElementById;
        nameElement.innerHTML = randomName;
        nameElement.addEventListener('click', function(){
            alert(nameElement.innerHTML);
        })

        // select the new parent of the li element
        let parent = document.querySelector("#numbers");
        // add the new name element as a child of the ul#numbers element
        parent.appendChild(nameElement);
    })  
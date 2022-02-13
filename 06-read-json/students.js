// the DOMContentLoaded event happens to the window
// when the DOM tree is ready. This makes it perfect
// starting place for your web application
window.addEventListener("DOMContentLoaded", async function(){
    let response = await axios.get('students.json');
    let students = response.data;

    // the most basic way: innerHTML
    // for (let eachStudent of students) {
    //     let studentList = document.querySelector('#students');
    //     studentList.innerHTML += 
    //         `<li class="list-group-item">${eachStudent.name}</li>`
    // }

    // second method: using append child
    // for (let eachStudent of students) {
    //     // create an li
    //     let studentElement = document.createElement('li');
        
    //     let spanElement = document.createElement('span');
    //     spanElement.innerText = eachStudent.name;
    //     spanElement.className="mx-3";

    //     let buttonElement = document.createElement('button');
    //     buttonElement.innerText = "Show GPA";
    //     buttonElement.className = "btn btn-primary";
    //     buttonElement.addEventListener('click', function(){
    //         alert("GPA = " + eachStudent.gpa);
    //     })

    //     // add the span element and the button element
    //     // into the student element
    //     studentElement.appendChild(spanElement);
    //     studentElement.appendChild(buttonElement);
     
    //     studentElement.className = "list-group-item";  // eqv. <li class="list-group-item">...</li>

    //     let studentList = document.querySelector('#students');
    //     studentList.appendChild(studentElement);
    // }

    // method 3: hybrid
    for (let eachStudent of students) {
        let studentElement = document.createElement('li');
        studentElement.innerHTML = `
            <span class="mx-3">${eachStudent.name}</span>
            <button class="btn btn-primary">Show GPA</button>
        `;
        studentElement.className = "list-group-item";

        let showGPAButton = studentElement.querySelector('button');
        showGPAButton.addEventListener("click", function(){
            alert("GPA = " + eachStudent.gpa);
        })
        document.querySelector('#students')
                .appendChild(studentElement);
    }
});
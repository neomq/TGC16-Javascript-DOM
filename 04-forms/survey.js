let btn = document.querySelector('#btn');

// add an event listener to the button element
// such that when it clicks, it will run
// the function defined as the second parameter
btn.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    // let rating = document.querySelector('.rating:checked').value;
    let rating = null; // before we run the for-loop, we don't
                       // know which one has been selected

    // get all the radio buttons with .rating in one array
    let rb = document.querySelectorAll('.rating');
    for (let eachRating of rb) {
        // for each rating radio button, check if its .checked
        // is true
        if (eachRating.checked == true) {
            rating = eachRating.value;
            break;
        }
    }

    // to get all the values of the selected checkboxes
    // since there might be more than one selected checkbox
    // we use querySelectorAll
    // let selectedCheckboxes = document.querySelectorAll('.hear-about:checked');
    // let hearAbout = []; // use an array as the default value
    //                     // because more than 1 can be selected
    // for (let checkbox of selectedCheckboxes) {
    //     // .push is to add to the back of an array
    //     hearAbout.push(checkbox.value);
    // }

    // using linear search to find all the selected checkboxes
    let allCheckboxes = document.getElementsByClassName('hear-about');
    let hearAbout = [];
    for (let checkbox of allCheckboxes) {
        if (checkbox.checked == true) {
            hearAbout.push(checkbox.value);
        
        }
    }

    console.log(name, email, rating, hearAbout);
})
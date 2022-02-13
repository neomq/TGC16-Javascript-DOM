document.querySelector('#btnCalculate')
.addEventListener('click', function(){
    let weightInput = document.querySelector('#weight');
    let weight = parseFloat(weightInput.value);

    let heightInput = document.querySelector('#height');
    let height = parseFloat(heightInput.value);

    // let unitOfMeasurement = document.querySelector('.measurement:checked').value;
    let unitOfMeasurement = document.querySelector('[name="measurement"]:checked')

    let bmi = 0;
    if (unitOfMeasurement=='metric') {
        bmi = weight / height ** 2;
    } else {
        bmi = weight / height ** 2 * 703;
    }
   
    
    document.querySelector('#result').innerText = "Your bmi is " + bmi.toFixed(2);


})
document.querySelector('#btn')
        .addEventListener('click', function(){
            
            // define the flags
            // assume the form is innocent
            // (that is no error)
            let nameNotProvided = false;
            let nameTooShort = false;
            let emailNotValid = false;
            
            let name = document.querySelector('#name').value;
            if (!name) {
                nameNotProvided = true;
            } else if (name.length < 3) {
                nameTooShort = true;
            }
            
            let email = document.querySelector("#email").value;
            // if the email contains an @ and a '.' is considered
            // to be a valid
            if (!email.includes('.') || !email.includes('@')) {
                emailNotValid = true;
            }

            // check if there is any error
            if (nameNotProvided || nameTooShort || emailNotValid) {
                let errorDiv = document.querySelector('#errors');
                // wipe out all the existing error messages
                errorDiv.innerHTML = '';
                errorDiv.style.display = 'block';
                if (nameNotProvided) {
                    // use += to append instead of overwrite
                    errorDiv.innerHTML += `<p>Please provide your name</p>`;
                }

                if (nameTooShort) {
                    errorDiv.innerHTML += '<p>Your name is too short</p>';
                }

                if (emailNotValid) {
                    errorDiv.innerHTML += '<p>Your email should contains at least one . and at least one @</p>';
                }
            }

            console.log("name not provided =", nameNotProvided);
            console.log("name too short =", nameTooShort);
            console.log("email not valid =", emailNotValid);

        })
document.querySelector('.formSubmit').addEventListener('click', (e) => {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const c_password = document.getElementById("confirmPassword").value;

    // Regex patterns
    const usernameRegex = /^[A-Za-z0-9 ]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    // Clear all error messages
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    let isValid = true;

    // Username validation
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = "Username is not valid";
        isValid = false;
    }


    // Password validation
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = "Password Must be 8 characteres and include at lest one uppercase letter, one lawercase letter, one number, and one special character.";
        isValid = false;
    }


    // Email validation
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "please enter your valid email";
        isValid = false;
    }


    // Email validation
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits long and start with 6, 7, 8, 9 or 10";
        isValid = false;
    }

    //validate confirm password
    if (c_password !== password){
        document.getElementById('confirmPasswordError').textContent = "Password is not matching";
        isValid = false;
    }
// let formClass = document.getElementsByClassName('form-control');
//         console.log(formClass);

    let userData = [];
    // Final submission logic
    if (isValid) {
        let formClass = document.getElementsByClassName('form-control');
        Array.from(formClass).forEach((curElem) => userData.push(curElem.value));
        Array.from(formClass).forEach((curElem) => (curElem.value = ""));
        console.log(userData);
        alert("Form submitted successfully!");
       
    }
});

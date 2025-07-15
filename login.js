const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    // console.log(atSymbol);

    var dot = emailVal.lastIndexOf('.');
    // console.log(dot);

    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // for userName
    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 char');
    } else if (!isNaN(usernameVal)) {
        setErrorMsg(username, 'username must be letter');
    } else {
        setSuccessMsg(username);
    }

    // for email
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    }
}

const setErrorMsg = (input, errormsgs) => {
    input.classList.add('border-red-600', 'border-[2px]');
    input.classList.remove('border-teal-600', 'border-[2px]');
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const successIcon = formControl.querySelector('i.fa-check-circle');
    const errorIcon = formControl.querySelector('i.fa-exclamation-circle');
    errorIcon.classList.remove('hidden');
    successIcon.classList.add('hidden');
    small.classList.remove('hidden');
    small.innerText = errormsgs;
    input.classList.add('border-red-600', 'border-[2px]');
}

const setSuccessMsg = (input) => {
    input.classList.add('border-teal-600', 'border-[2px]');
    input.classList.remove('border-red-600', 'border-[2px]');
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const successIcon = formControl.querySelector('i.fa-check-circle');
    const errorIcon = formControl.querySelector('i.fa-exclamation-circle');
    successIcon.classList.remove('hidden');
    errorIcon.classList.add('hidden');
    small.classList.add('hidden');
}
const formEL = document.querySelector('.login-form');

const handlerSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const emailInput = event.target.elements.email.value.trim();
    const passwordInput = event.target.elements.password.value.trim();

    const info = {
        email: emailInput,
        password: passwordInput,
    }

    emailInput === '' || passwordInput === '' ? alert('All form fields must be filled in') : console.log(info);
    form.reset();
    
}
formEL.addEventListener('submit', handlerSubmit);

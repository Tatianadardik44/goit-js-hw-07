const form = document.querySelector(".login-form");
form.addEventListener("submit", fillingForm);

function fillingForm(event) {
    event.preventDefault();
  
    const elements = event.target.elements;
    
    if(elements.email.value === `` || elements.password.value === ``)
    {
        alert (`All form fields must be filled in`);
    } else {
        const details = {
            email: elements.email.value,
            password: elements.password.value
        } 
        console.log(details);
    }
    event.target.reset();


}; 



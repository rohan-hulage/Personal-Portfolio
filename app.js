const form = document.getElementById('contact-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

form.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log("Debugging");
    if (nameInput.value === "") {
        alert("Enter Correct Name");
    } else if (emailInput.value === ""){
        alert("Enter Correct Email");
    }else if(messageInput.value === ""){
        alert("Enter Something");
    }

    /*
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value); */

    localStorage.setItem('nameValue', nameInput.value)
    const loc_nameValue =localStorage.getItem('nameValue')
    console.log(loc_nameValue);
});



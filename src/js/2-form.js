const formData = {
    email: "",
    message: ""
}

const KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", info);
text();
form.addEventListener("submit", send);


function info(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    }    
    else if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem(KEY, JSON.stringify(formData));
    
}

function text() {
    const messageText = JSON.parse(localStorage.getItem(KEY));
    // console.log(messageText);
    
    if (messageText) {
        form.elements.email.value = messageText.email;
        form.elements.message.value = messageText.message;
    }
    
}


function send(event) {
    event.preventDefault();

    const emailArea = event.target.elements.email.value;
    const textArea = event.target.elements.message.value;
    if (!emailArea || !textArea) {
        window.alert("Fill please all fields");
        return;
    }
    console.log(formData);
    
   
    localStorage.removeItem(KEY);
    formData.email = "";
    formData.message = "";
    event.currentTarget.reset(); 
}



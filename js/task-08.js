const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    const objEl = { email: email.value, password: password.value };
    console.log(objEl)
    // console.log(`email: ${objEl.email.value} password: ${objEl.password.value}`);

    event.currentTarget.reset();
}
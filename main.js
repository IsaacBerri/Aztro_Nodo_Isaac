const form = document.getElementById("form");
const inputCheckbox = document.querySelectorAll("input[type=checkbox]");
const inputRadio = document.querySelectorAll("input[type=radio]");

console.log(inputCheckbox);
console.log(inputRadio);

function validateInputs(inputs, mensaje) {
    let isValid = false;
    for (const element of inputs) {
        if (element.checked) {
            isValid = true;
            break;
        }
    }

    if (!isValid) {
        alert(mensaje);
        return false;
    }

    return isValid;
}

form.addEventListener("submit", (event) => {
    if (!validateInputs(inputCheckbox, "Selecciona una carrera") || !validateInputs(inputRadio, "Selecciona una modalidad")) {
        event.preventDefault();
    }
})
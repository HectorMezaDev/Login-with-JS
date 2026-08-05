const Name = document.getElementById("name");
const Surname = document.getElementById("surname");
const Phone = document.getElementById("phone");
const Email = document.getElementById("email");
const AccountNumber = document.getElementById("accountn");

const form = document.getElementById("form-validation");

function validarCampo(esValido, input) {
    const grupo = input.closest(".form-group");
    if (!esValido) {
        grupo.classList.add("was-validated");
        input.style.borderColor = "red";
    } else {
        grupo.classList.remove("was-validated");
        input.style.borderColor = "";
    }
    return esValido;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const regexNombre = /^[A-Za-zÀ-ÿ]{4,}$/;
    const nombreValido = validarCampo(regexNombre.test(Name.value.trim()), Name);

    const apellidoValido = validarCampo(regexNombre.test(Surname.value.trim()), Surname);

    const regexPhone = /^\d{1,8}$/;
    const phoneValido = validarCampo(regexPhone.test(Phone.value.trim()), Phone);

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = validarCampo(regexEmail.test(Email.value.trim()), Email);

    const regexAccount = /^\d{8}$/;
    const cuentaValida = validarCampo(regexAccount.test(AccountNumber.value.trim()), AccountNumber);

    if (nombreValido && apellidoValido && phoneValido && emailValido && cuentaValida) {
        alert("¡Login exitoso!");
        form.reset();
        document.querySelectorAll(".form-group").forEach(g => {
            g.classList.remove("was-validated");
            g.querySelector("input").style.borderColor = "";
        });
    }
});

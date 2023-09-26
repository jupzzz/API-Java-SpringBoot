const form = document.querySelector("form");
const Iemail = document.querySelector(".email");
const Ipassword = document.querySelector(".password");

function register() {

    fetch('http://localhost:8080/register',
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: Iemail.value,
                password: Ipassword.value
            })
        })

        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function cleaning() {
    Iemail.value = "",
    Ipassword.value = ""
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    register();
    cleaning();
});
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let section = document.getElementById("section").value;
            let department = document.getElementById("department").value;
            let year = document.getElementById("year").value;
            let password = document.getElementById("password").value;

            let userData = { name, section, department, year, password };
            localStorage.setItem(name, JSON.stringify(userData));

            alert("Registration Successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("loginName").value.trim();
            let password = document.getElementById("loginPassword").value.trim();
            let storedUser = localStorage.getItem(name);

            if (!storedUser) {
                alert("User not found!");
                return;
            }

            let userData = JSON.parse(storedUser);
            if (userData.password !== password) {
                alert("Incorrect password!");
                return;
            }

            alert("Login Successful!");
            sessionStorage.setItem("loggedInUser", name);
            window.location.href = "home.html";
        });
    }
});

function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "exit.html";
}

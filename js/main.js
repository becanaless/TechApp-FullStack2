document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    //Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const usernameInput = document.getElementById("login-username");
            const passwordInput = document.getElementById("login-password");

            const username = usernameInput?.value.trim();
            const password = passwordInput?.value.trim();

            if (!username || !password) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            alert(`¡Bienvenido de nuevo, ${username}!`);
            window.location.href = "inicio.html"; // Redirige a inicio.html
        });
    }

    //Register
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("reg-name");
            const emailInput = document.getElementById("reg-email");
            const passwordInput = document.getElementById("reg-password");
            const confirmPasswordInput = document.getElementById("reg-confirm-password");

            const fullname = nameInput?.value.trim();
            const email = emailInput?.value.trim();
            const password = passwordInput?.value;
            const confirmPassword = confirmPasswordInput?.value;

            if (!fullname || !email || !password || !confirmPassword) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Por favor, verifica.");
                return;
            }

            alert("¡Cuenta creada con éxito!");
            window.location.href = "inicio.html";
        });
    }
});
console.log("Hello, world!")

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('form[action="/login"]');
    const registerForm = document.querySelector('form[action="/register"]');

    //Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = loginForm.querySelector("#login-username") || loginForm.querySelector("#username");
            const passwordInput = loginForm.querySelector("#login-password") || loginForm.querySelector("#password");

            const username = usernameInput?.value.trim();
            const password = passwordInput?.value.trim();

            if (!username || !password) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            console.log("Intentando iniciar sesión con:", { username, password });
            //test de login
            alert(`¡Bienvenido de nuevo, ${username}!`);
            loginForm.reset();
        });
    }
    //Register
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = registerForm.querySelector("#reg-name");
            const emailInput = registerForm.querySelector("#reg-email");
            const passwordInput = registerForm.querySelector("#reg-password");
            const confirmPasswordInput = registerForm.querySelector("#reg-confirm-password");

            const fullname = nameInput?.value.trim();
            const email = emailInput?.value.trim();
            const password = passwordInput?.value;
            const confirmPassword = confirmPasswordInput?.value;

            if (confirmPasswordInput && password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Por favor, verifica.");
                return;
            }

            console.log("Registrando usuario:", { fullname, email });
            // Simulación de registro exitoso
            alert("¡Cuenta creada con éxito!");
            registerForm.reset();
        });
    }
});
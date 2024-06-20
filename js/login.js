// Referencia al formulario de login
const loginForm = document.getElementById('loginForm');

// Función para manejar el inicio de sesión
const iniciarSesion = async (correo, contrasena) => {
    try {
        // Iniciar sesión con Firebase Authentication
        const userCredential = await firebase.auth().signInWithEmailAndPassword(correo, contrasena);
        
        // Redirigir a la página de agendamiento.html
        window.location.href = 'agendamiento.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Correo o contraseña incorrectos. Por favor intenta de nuevo.');
    }
};

// Event listener para el submit del formulario de login
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Obtener valores del formulario
    const correo = loginForm['correo'].value.trim();
    const contrasena = loginForm['contrasena'].value;

    // Validar que los campos no estén vacíos
    if (correo && contrasena) {
        // Llamar a la función para iniciar sesión
        iniciarSesion(correo, contrasena);
    } else {
        alert('Por favor completa todos los campos.');
    }
});


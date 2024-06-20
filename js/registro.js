// Referencia al formulario de registro
const registroForm = document.getElementById('registroForm');

// Función para manejar el registro de usuario
const registrarUsuario = async (nombre, correo, codigo, contrasena) => {
    try {
        // Iniciar Firebase si aún no se ha inicializado (esto debería hacerse en script.js)
        if (!firebase.apps.length) {
            throw new Error('Firebase no está inicializado correctamente.');
        }

        // Crear usuario en Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(correo, contrasena);
        // Obtener el UUID generado por Firebase
        const uuid = userCredential.user.uid;

        // Datos a enviar al backend
        const datos = {
            nombre: nombre,
            correo: correo,
            codigo: codigo,
            uuid: uuid
        };

        // Enviar datos al backend usando fetch
        const response = await fetch('http://localhost:8081/api/estudiantes/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            throw new Error('Error al registrar usuario en el backend.');
        }

        // Mostrar alerta de registro exitoso
        alert('¡Usuario registrado correctamente!');
        // Redirigir a la página de login
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error:', error);
        alert('Error al registrar usuario en Firebase o en el backend.');
    }
};

// Event listener para el submit del formulario de registro
registroForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Obtener valores del formulario
    const nombre = registroForm['nombre'].value.trim();
    const correo = registroForm['correo'].value.trim();
    const codigo = registroForm['codigo'].value.trim();
    const contrasena = registroForm['contrasena'].value;

    // Validar que los campos no estén vacíos
    if (nombre && correo && codigo && contrasena) {
        // Llamar a la función para registrar usuario
        registrarUsuario(nombre, correo, codigo, contrasena);
    } else {
        alert('Por favor completa todos los campos.');
    }
});
function sendResetLink() {
    const email = document.getElementById('email').value;

    // Validación del formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert('Ingresa una dirección de correo electrónico válida.');
        return false; // No se envía el formulario si el formato de correo electrónico es incorrecto
    }

    // Simulación de la solicitud (reemplaza esto con tu lógica real de envío de correo):
    setTimeout(() => {
        alert(`Se ha enviado un enlace de restablecimiento de contraseña a ${email}. Revise su correo electrónico para restablecer su contraseña.`);
        document.getElementById('email').value = ''; // Limpiar el campo de correo electrónico después de enviar
    }, 1000);

    return false; // Evita que el formulario se envíe
}

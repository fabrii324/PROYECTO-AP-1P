// Función para mostrar el formulario de edición y ocultar la información del perfil
function showEditForm() {
    document.querySelector('.edit-form').style.display = 'block';
    document.querySelector('.profile-info').style.display = 'none';
}

// Función para guardar los cambios en el perfil
function saveProfile() {
    var newName = document.getElementById('new-name').value;
    var newEmail = document.getElementById('new-email').value;

    // Actualiza la información del perfil con los nuevos valores
    document.getElementById('name').textContent = newName;
    document.getElementById('email').textContent = newEmail;

    // Oculta el formulario de edición y muestra la información del perfil actualizada
    document.querySelector('.edit-form').style.display = 'none';
    document.querySelector('.profile-info').style.display = 'block';

    // Previene el envío del formulario (para que la página no se recargue)
    return false;
}

// Agrega un evento para mostrar el formulario de edición cuando se hace clic en el botón "Editar Perfil"
document.getElementById('edit-button').addEventListener('click', showEditForm);



// Función para guardar los cambios en el perfil con validaciones
function saveProfile() {
    var newName = document.getElementById('new-name').value;
    var newEmail = document.getElementById('new-email').value;

     // Realiza validación del nombre
     if (newName.length <= 3) {
        alert('El nombre debe tener más de 3 caracteres.');
        return false;
    }

    // Realiza validación del correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!newEmail.match(emailPattern)) {
        alert('El correo electrónico ingresado no es válido.');
        return false;
    }

    // Actualiza la información del perfil con los nuevos valores
    document.getElementById('name').textContent = newName;
    document.getElementById('email').textContent = newEmail;

    // Oculta el formulario de edición y muestra la información del perfil actualizada
    document.querySelector('.edit-form').style.display = 'none';
    document.querySelector('.profile-info').style.display = 'block';

    // Previene el envío del formulario (para que la página no se recargue)
    return false;
}





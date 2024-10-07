function validateForm() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    let hasError = false; // Variable para rastrear errores
  
    // Validación de nombre completo (debe tener al menos 3 caracteres y solo letras y espacios)
    const namePattern = /^[a-zA-ZáéíóúñÑü]+$/;
    if (firstname.length < 3 || lastname.length < 3 || !firstname.match(namePattern) || !lastname.match(namePattern)) {
      document.getElementById('firstname-error').textContent = 'El nombre y el apellido deben tener al menos 3 caracteres y solo letras.';
      hasError = true;
    } else {
      document.getElementById('firstname-error').textContent = '';
    }
  
    // Validación del nombre de usuario (debe tener al menos 3 caracteres)
    if (username.length < 3) {
      document.getElementById('username-error').textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
      hasError = true;
    } else {
      document.getElementById('username-error').textContent = '';
    }
  
    // Validación de la dirección de correo electrónico (debe ser una dirección de correo electrónico válida)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      document.getElementById('email-error').textContent = 'Ingresa una dirección de correo electrónico válida.';
      hasError = true;
    } else {
      document.getElementById('email-error').textContent = '';
    }
  
    // Validación de la contraseña (debe tener al menos 6 caracteres)
    if (password.length < 6) {
      document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 6 caracteres.';
      hasError = true;
    } else {
      document.getElementById('password-error').textContent = '';
    }
  
    // Validación de la confirmación de contraseña (debe coincidir con la contraseña)
    if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').textContent = 'Las contraseñas no coinciden.';
      hasError = true;
    } else {
      document.getElementById('confirm-password-error').textContent = '';
    }
  
    // Si hay errores, no se envía el formulario
    if (hasError) {
      return false;
    }
  
    // Si no hay errores, el formulario se envía
    return true;
  }
  
// Datos de prácticas pre profesionales (simulados)
const practices = [
    { title: 'Práctica 1', description: 'Descripción de la Práctica 1' },
    { title: 'Práctica 2', description: 'Descripción de la Práctica 2' },
    { title: 'Práctica 3', description: 'Descripción de la Práctica 3' },

];

// Función para buscar prácticas
function searchPractices() {
    const searchInput = document.getElementById('search-input').value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    practices.forEach((practice) => {
        if (practice.title.toLowerCase().includes(searchInput.toLowerCase()) || practice.description.toLowerCase().includes(searchInput.toLowerCase())) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = `
                <h3>${practice.title}</h3>
                <p>${practice.description}</p>
                <button onclick="requestPractice('${practice.title}')">Solicitar</button>
            `;
            searchResults.appendChild(resultItem);
        }
    });
}

// Función para enviar una solicitud de práctica
function submitRequest() {
    const studentName = document.getElementById('student-name').value;
    const studentEmail = document.getElementById('student-email').value;
    const studentCareer = document.getElementById('student-career').value;
    const studentSemester = document.getElementById('student-semester').value;

    
    // Simulación de solicitud:
    alert(`Solicitud enviada por ${studentName} (${studentEmail}) para la carrera ${studentCareer}, semestre ${studentSemester}`);
}

// Función para solicitar una práctica específica
function requestPractice(practiceTitle) {
    const studentName = document.getElementById('student-name').value;
    const studentEmail = document.getElementById('student-email').value;
    const studentCareer = document.getElementById('student-career').value;
    const studentSemester = document.getElementById('student-semester').value;

  
    // Simulación de solicitud:
    alert(`Solicitud de ${studentName} (${studentEmail}) para la práctica "${practiceTitle}" enviada. Carrera ${studentCareer}, semestre ${studentSemester}`);
}

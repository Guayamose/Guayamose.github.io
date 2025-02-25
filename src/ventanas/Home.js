// ===========================================================================
// Archivo: script.js
// Descripción: Controla la navegación entre secciones (ventanas) del sitio.
// Al hacer clic en cada enlace del menú, se ocultan todas las secciones y se
// muestra únicamente la sección correspondiente.
// ===========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces de navegación y las secciones
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    /**
     * Función para ocultar todas las secciones eliminando la clase "active"
     */
    function hideAllSections() {
      sections.forEach(section => {
        section.classList.remove('active');
      });
    }
  
    /**
     * Función manejadora para el clic en los enlaces de navegación.
     * Obtiene el valor del atributo data-target y muestra la sección con ese id.
     * @param {Event} e - El evento click.
     */
    function handleNavClick(e) {
      e.preventDefault();
      const targetID = this.getAttribute('data-target');
      if (!targetID) return;
      hideAllSections();
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Asigna el evento click a cada enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
  
    // Función adicional para actualizar dinámicamente algún contenido
    function actualizarDatosDinamicos() {
      // Aquí se pueden realizar peticiones AJAX para actualizar el bracket u otras secciones
      console.log("Actualizando datos dinámicos...");
    }
  
    // Actualización periódica (opcional)
    setInterval(actualizarDatosDinamicos, 60000); // Actualiza cada 60 segundos
  });
  
  // ===========================================================================
  // FIN de script.js
  // ===========================================================================
  
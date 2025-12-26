// 1. Seleccionamos el botón del HTML
const boton = document.getElementById('boton-tema');

// 2. Escuchamos cuando el usuario hace CLICK
boton.addEventListener('click', function() {
    
    // 3. Le decimos al cuerpo de la página (body) que cambie su clase
    document.body.classList.toggle('modo-oscuro');

    // Opcional: Cambiar el texto del botón
    if (document.body.classList.contains('modo-oscuro')) {
        boton.textContent = '☀️ Modo Claro';
    } else {
        boton.textContent = '🌙 Modo Oscuro';
    }

});
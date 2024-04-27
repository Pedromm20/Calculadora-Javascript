function añadirAPantalla(valor) {
    document.getElementById("screen").value += valor;
}

function limpiarPantalla() {
    document.getElementById("screen").value = '';
}

function calcular() {
    try {
        let resultado = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = resultado;
    } catch (error) {
        alert('Error en la expresión');
        limpiarPantalla();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btnTema = document.querySelector('.theme-btn');
    const btnReset = document.querySelector('.clear');
    const btnEquals = document.querySelector('.equals');

    // Función para cambiar entre temas claro y oscuro
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        btnReset.classList.toggle('dark-theme');
        btnEquals.classList.toggle('dark-theme');
    });
});

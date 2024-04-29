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

function calcularPorcentaje() {
    try {
        let valor = eval(document.getElementById("screen").value);
        let resultado = valor / 100;
        document.getElementById("screen").value = resultado;
    } catch (error) {
        alert('Error en la expresión');
        limpiarPantalla();
    }
}

function calcularPotencia(exponente) {
    try {
        let valor = eval(document.getElementById("screen").value);
        let resultado = Math.pow(valor, exponente);
        document.getElementById("screen").value = resultado;
    } catch (error) {
        alert('Error en la expresión');
        limpiarPantalla();
    }
}

function calcularRaizCuadrada() {
    try {
        let valor = eval(document.getElementById("screen").value);
        if (valor >= 0) {
            let resultado = Math.sqrt(valor);
            document.getElementById("screen").value = resultado;
        } else {
            alert('No se puede calcular la raíz cuadrada de un número negativo');
            limpiarPantalla();
        }
    } catch (error) {
        alert('Error en la expresión');
        limpiarPantalla();
    }
}

function borrarDigito() {
    let pantalla = document.getElementById("screen");
    pantalla.value = pantalla.value.slice(0, -1);
}

document.addEventListener("DOMContentLoaded", function() {
    const btnTema = document.querySelector('.theme-btn');
    const btnReset = document.querySelector('.clear');
    const btnEquals = document.querySelector('.equals');

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        btnReset.classList.toggle('dark-theme');
        btnEquals.classList.toggle('dark-theme');
    });
});

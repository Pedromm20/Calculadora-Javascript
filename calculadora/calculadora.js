document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const operators = document.querySelectorAll('.operator');

    let currentNumber = ''; // Cambié la inicialización a una cadena vacía

    const updateScreen = () => {
        screen.value = currentNumber;
    };

    const calculate = () => {
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        let result = '';
        switch(operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentNumber = result.toString();
        operator = '';
        previousNumber = '';
        updateScreen();
    };

    let previousNumber = ''; // Declara previousNumber aquí para que sea accesible en calculate()

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (value === 'C') { // Agregamos un caso especial para el botón 'C'
                currentNumber = ''; // Borra el número actual
                updateScreen();
                return; // Sale de la función para evitar ejecutar el resto del código
            }
            if (!isNaN(value) || value === '.') {
                currentNumber += value; // Cambié el condicional para incluir el punto decimal
                updateScreen();
            } else if (value === '=') {
                if (operator && previousNumber !== '') { // Verifica que haya un operador y un número anterior
                    calculate();
                }
            } else {
                operator = value;
                previousNumber = currentNumber;
                currentNumber = '';
            }
        });
    });

    // Agregamos un listener para los operadores
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            const value = operator.value;
            if (currentNumber !== '' && previousNumber !== '') { // Verifica que haya un número actual y un número anterior
                calculate();
                operator.value = value; // Guarda el operador para su uso después del cálculo
            }
        });
    });
});

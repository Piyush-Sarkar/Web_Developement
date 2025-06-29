window.onload = function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value= button.textContent;
            let current = display.value;
            switch(value) {
                case "C":
                    display.value = "";
                    break;
                case "=":
                    try {
                    const expr = current.replace(/\^/g, "**").replace(/sqrt/g, "Math.sqrt");
                    display.value = eval(expr);
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case "<-":
                    display.value = current.slice(0, -1);
                break;
                case "End":
                    window.close();
                    break;
                case "%":
                    try {
                    display.value = eval(current + "/100");
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case "^":
                    display.value += "^";
                break;
                case "sqrt":
                    display.value += "sqrt(";
                break;
                default:
                    display.value += value; 
            }
        });
    });
};
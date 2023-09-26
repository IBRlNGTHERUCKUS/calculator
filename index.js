const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', handleButtons);
}
const output = document.querySelector('.output');
let opr1 = 0, opr2, operator;

function compute(operand1, operator, operand2) {
    if (operator == '+') {return operand1 + operand2;}
    else if (operator == '-') {return operand1 - operand2}
    else if (operator == '*') {return operand1 * operand2}
    else if (operator == '/') {return operand2 != 0 ? operand1 / operand2 : "error"}
}

function update(out) {
    output.textContent = out;
}

function handleButtons(event) {
    let buttonPressed = event.target;
    console.log(buttonPressed)

    if (buttonPressed.classList[0] == 'operator') {
        // complete last operation and update screen (non-first run)
        if (opr1 && operator && opr2) {
            opr1 = compute(opr1, operator, opr2);
            opr2 = null;
           update(opr1);
        }
        else if (operator = '=') {operator = null}
        operator = buttonPressed.textContent;
    }
    else if (buttonPressed.className == 'number') {
        if (opr1 == null && operator == null) {
            opr1 = +buttonPressed.textContent;
            update(opr1);
        }
        else if (opr1 != null && operator == null) {
            opr1 = opr1 * 10 + +buttonPressed.textContent;
            update(opr1);
        }
        else if (opr2 == null) {
            opr2 = +buttonPressed.textContent;
            update(opr2);
        }
        else {
            opr2 = opr2 * 10 + +buttonPressed.textContent;
            update(opr2);
        }
    }
}
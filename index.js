const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', handleButtons);
}
const screen = document.querySelector('.screen');
let opr1, opr2, operator;

function compute(operand1, operator, operand2) {
    if (operator == '+') {return operand1 + operand2;}
    else if (operator == '-') {return operand1 - operand2}
    else if (operator == '*') {return operand1 * operand2}
    else if (operator == '%') {return operand2 != 0 ? (operand1 % operand2) : "error"}
}

function update(out) {
    screen.textContent = out;
}
update(0);

function handleButtons(event) {
    let buttonPressed = event.target;
    console.log(buttonPressed)

    if (buttonPressed.classList[0] == 'operator') {
        // complete last operation and update screen (non-first run)
        if (opr1 && operator && opr2) {
            opr1 = compute(+opr1, operator, +opr2);
            opr2 = null;
           update(opr1);
        }
        operator = buttonPressed.textContent;
    }
    else if (buttonPressed.classList[0] == 'number') {
        if ((opr1 == null && operator == null) || operator == '=') {
            opr1 = buttonPressed.textContent;
            operator = null;   // allows number input after = to restart calculator
            update(opr1);
        }
        else if (opr1 != null && operator == null) {
            opr1 += buttonPressed.textContent;
            update(opr1);
        }
        else if (opr2 == null) {
            opr2 = buttonPressed.textContent;
            update(opr2);
        }
        else {
            opr2 += buttonPressed.textContent;
            update(opr2);
        }
    }
    else if (buttonPressed.classList[0] == 'negative') {
        if (opr2) {
            opr2 *= -1;
            update(opr2);
        }
        else if (opr1) {
            opr1 *= -1;
            update(opr1);
        }
        else {
            opr1 = '-';
            update(opr1);
        }
    }
    else if (buttonPressed.classList[0] == 'ac') {
        opr1 = opr2 = operator = null;
        update(0);
    }
}
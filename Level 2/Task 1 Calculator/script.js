const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";
let lastAnswer = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        // CLEAR
        if (value === "C") {
            expression = "";
            display.value = "";
        }

        // DELETE
        else if (value === "del") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }

        // ANSWER
        else if (value === "ans") {
            expression += lastAnswer;
            display.value = expression;
        }

        // ENTER (=)
        else if (value === "ENTER") {
            try {
                let finalExpression = expression
                    .replace(/%/g, "/100")
                    .replace(/√/g, "Math.sqrt");

                let result = eval(finalExpression);
                display.value = result;
                lastAnswer = result;
                expression = result.toString();
            } catch {
                display.value = "Error";
                expression = "";
            }
        }

        // PLUS / MINUS
        else if (value === "±") {
            if (expression) {
                expression = (-eval(expression)).toString();
                display.value = expression;
            }
        }

        // SQUARE ROOT
        else if (value === "√") {
            try {
                let result = Math.sqrt(eval(expression));
                display.value = result;
                lastAnswer = result;
                expression = result.toString();
            } catch {
                display.value = "Error";
            }
        }

        // DEFAULT (numbers & operators)
        else {
            expression += value;
            display.value = expression;
        }
    });
});

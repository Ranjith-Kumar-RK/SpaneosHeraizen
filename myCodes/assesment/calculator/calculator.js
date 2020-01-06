form = document.querySelector("#calcForm");
result = document.querySelector("#result");
btnAdd = document.querySelector("#btnAdd");
btnMul = document.querySelector("#btnMul");
btnDiv = document.querySelector("#btnDiv");
btnSub = document.querySelector("#btnSub");

let out = 0;

function showResult(operator) {
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    if (operator === "+") {
        out = Number.parseInt(num1) + Number.parseInt(num2);
    } else if (operator === "*") {
        out = Number.parseInt(num1) * Number.parseInt(num2);
    } else if (operator === "/") {
        out = Number.parseInt(num1) / Number.parseInt(num2);
    } else if (operator === "-") {
        out = Number.parseInt(num1) - Number.parseInt(num2);
    }

    result.innerHTML = `${num1} ${operator} ${num2} = ${out}`;
}

btnAdd.addEventListener("click", e => {
    e.preventDefault();
    showResult("+");
});

btnMul.addEventListener("click", e => {
    e.preventDefault();
    showResult("*");
});

btnDiv.addEventListener("click", e => {
    e.preventDefault();
    showResult("/");
});

btnSub.addEventListener("click", e => {
    e.preventDefault();
    showResult("-");
});
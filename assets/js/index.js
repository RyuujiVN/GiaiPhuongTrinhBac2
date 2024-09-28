import { calculate } from "./calculate.js";


const number = document.querySelectorAll(".number")
const result = document.querySelector(".result")
const error = document.querySelectorAll(".error")

const calButton = document.querySelector(".calculate");
calButton.addEventListener("click", () => {
    const a = Number(number[0].value);
    const b = Number(number[1].value);
    const c = Number(number[2].value);
    if (isNaN(a) || number[0].value == "" || isNaN(b) || number[1].value == "" || isNaN(c) || number[2].value == "")
        alert(`Vui lòng nhập số!`);
    else
        result.innerText = calculate(a, b, c);
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    number.forEach(item => {
        item.value = "";
    })
    result.innerText = "";
}); 
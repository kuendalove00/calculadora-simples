const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const operators = ["+","-","x","/","%","="];
let output = "";
let result = "";

const calculate = (value) => {
    console.log(value);

    if(value === "=" && output !== "")
    {
        result = output.replace("x","*");
        output = eval(result.replace("%", "/100"));
    }
    else if(value === "AC")
    {
        output = "";
    }
    else if(value === "DEL")
    {
        output = output.toString().slice(0, -1);
    }else{
        if(output === "" && operators.includes(value)) return;

        output += value;
    }

    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        calculate(e.target.dataset.value)
    });
    
});
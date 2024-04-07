const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const operators = ["+","-","x","/","%","="];
let output = "";
let result = "";
let memory = []
let memoryback = 1
const calculate = (value) => {
    console.log(value);

    if(value === "=" && output !== "")
    {
        result = output.replace("x","*");
        memory.push(result)
        output = eval(result.replace("%", "/100"));
        memoryback=1
    }
    else if(value === "AC")
    {
        output = "";
        memoryback=1
    }
    else if(value === "DEL")
    {
        output = output.toString().slice(0, -1);
    }
     else if(value == "hist"){
        if (memoryback <= memory.length) {
            output = memory[memory.length-memoryback]
            memoryback += 1
        }else {
            alert("voce voltou ate a ultima opreção")
        }
        
    }   
    else{
        if(output === "" && operators.includes(value)) return;

        output += value;
    }

    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        calculate(e.target.dataset.value);
    });
    
});
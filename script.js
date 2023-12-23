document.getElementById("screen").disabled=true;
let input = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if (e.target.innerHTML == '=' && string != ""){
            string = eval(string).toFixed(2);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length -1);
            input.value = string;
        }
        else if (e.target.innerHTML != '='){
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
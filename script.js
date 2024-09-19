

let inputboxEl= document.getElementById("inputbox");
 let buttonEl = document.querySelectorAll("button");

 function clearResult(){
    inputboxEl.value ="";
 }
     
 function deleteChar(){
    let currentVal = document.getElementById("inputbox").value;
    inputboxEl.value = currentValue.slice(0, -1);
 }
 function appendCharacter(character){
    inputboxEl.value += character;
 }
 function calculate() {
    let expression = inputboxEl.value;
    try {
        let result = eval(expression);
        inputboxEl.value = result;
    } catch (error) {
        inputboxEl.value = 'Error';
    }
}


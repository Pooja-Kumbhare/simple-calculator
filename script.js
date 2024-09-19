

let inputboxEl= document.getElementById("inputbox");
 let buttonEl = document.querySelectorAll("button");

 let string ="";
 let arr = Array.from(buttonEl)
 arr.forEach(button => {
     button.addEventListener('clcik',(e) => {
        if(e.target.innerHTML == "=" ){
            string = Math(eval(string));
            inputboxEl.value = string;
        }
        else if(e.target.innerHTML == "Ac" ){

        string = "";
        inputboxEl.value = string;
        }
        else if(e.target.innerHTML == "Del" ){
        string = string.substring(0, string.length-1);
        inputboxEl.value = string;
        }
        else{
        string += e.target.innerHTML;
        inputboxEl.value = string;
        }
     })
 })
     


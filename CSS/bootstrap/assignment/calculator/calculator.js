let screen = document.getElementById('screen');
Buttons = document.querySelectorAll('Buttton');
let screenvalue ='';  
for (item of Buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', ButtonText);
        if(buttonText=='*'){
            buttonText ='*';
            screenvalue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='c'){
            screenvalue ="=";
            screen.value = screenvalue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        
    })
}
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin 3 digit found', pin);
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}



document.getElementById('generate-pin').addEventListener('click', function(){
    // console.log('Generate.js connected');


    const pin = getPin(); //number
    console.log(typeof pin);

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})



document.getElementById('calculator').addEventListener('click', function(event){
    // console.log( event.target.innerText);
    const selectElementInnerText = event.target.innerText;

    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(selectElementInnerText)){
        if(selectElementInnerText === 'C'){
            typedNumberField.value = "";
        }
        else if(selectElementInnerText === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainningDigits = digits.join('');
            typedNumberField.value = remainningDigits;
        }
    }


    else{
        //const typedNumberField = document.getElementById('typed-number');
        //const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + selectElementInnerText;
        typedNumberField.value = newTypedNumber;
    }
})



document.getElementById('submit-btn').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    console.log(typeof currentPin);

    const typedNumberField = document.getElementById('typed-number');
    const typedPin = typedNumberField.value; 
    console.log(typeof typedPin);

    const successMsg = document.getElementById('notify-success');
    const failedMsg = document.getElementById('notify-failed');

    if(currentPin === typedPin){
        //const successMsg = document.getElementById('notify-success');
        successMsg.style.display='block';
        failedMsg.style.display='none';

    }
    else {
        //const failedMsg = document.getElementById('notify-failed');
        failedMsg.style.display='block';
        successMsg.style.display='none';
    }
})
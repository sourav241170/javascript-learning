const form= document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#results');
    const you_are= document.querySelector('#you_are');

    if (height=== '' || height<0 || isNaN(height)){
        result.innerHTML= "Please give a Valid Height";
    }else if (weight=== '' || weight<0 || isNaN(weight)){
        result.innerHTML= "Please give a Valid weight";
    }else{
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML= `<span>${bmi}</span>`;

        //Range
        if (bmi<18.6) {
            you_are.innerHTML= "You are Under Weight";
        }else if(bmi>=18.6 && bmi<24.9){
            you_are.innerHTML= "You are in Normal Weight Range";
        }else{
            you_are.innerHTML= "You are Over Weight";
        }
    }
})
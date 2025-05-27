const form = document.querySelector('form')
// this usecase will give u empty value
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#results');


    if(height ==='' || height < 0 || isNaN(height) ){
       result.innerHTML =`Error! give a valid height ${height}`;
    }else if(weight ==='' || weight < 0 || isNaN(weight) ){
       result.innerHTML =`Error! give a valid weight ${weight}`;
    }else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        //show the result 
        // result.innerHTML = `<span>${BMI}</span>`
        if(BMI < 18.6){
            result.innerHTML =`<span>Person is under Weight with BMI value ${BMI}</span>`
        }
        if(BMI < 24.9 && BMI > 18.6){
            result.innerHTML =`<span>Person is of Normal Weight with BMI value ${BMI}</span>`
        }
        if(BMI > 24.9){
            result.innerHTML =`<span>Person is Over Weight with BMI value ${BMI}</span>`
        }
    }
    
});
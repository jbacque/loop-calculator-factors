// LOOP CALCULATOR - FACTORS

// Global Vars


// Event Listeners
document.getElementById('factors-btn1').addEventListener('click',factorsA);
document.getElementById('factors-btn2').addEventListener('click',factorsB);
document.getElementById('factors-btn3').addEventListener('click',factorsC);

// Event Functions
function factorsA(){
    document.getElementById('factors-result1').innerHTML = '';
    for(let i=1; i<=30; i++){
        if(30 % i == 0){
            document.getElementById('factors-result1').innerHTML += i + ' ';
        }
    }   
}

function factorsB(){
    document.getElementById('factors-result2').innerHTML = '';
    let num = Number(document.getElementById('factors-input2').value);
    console.log(typeof num);
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            document.getElementById('factors-result2').innerHTML += i + ' ';
        }
    }  
     

     
}

function factorsC(){
    document.getElementById('factors-result3').innerHTML = '';
    let num = Number(document.getElementById('factors-input3').value);
    let numberOfFactors = 0;
    console.log(num);
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            numberOfFactors++;
        }
    }
    
    if(numberOfFactors == 2){
        document.getElementById('factors-result3').innerHTML = num + ' is PRIME';
    } else if (numberOfFactors > 2){
        document.getElementById('factors-result3').innerHTML = num + ' is COMPOSITE';
    } else {
        document.getElementById('factors-result3').innerHTML = 'Something went wrong...';
    }
    
}
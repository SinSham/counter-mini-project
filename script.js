let count = 0;
 
let value = document.querySelector('.number');


function decrease(){
    count--;
    value.textContent = count;
}


function reset(){
    count = 0;
    value.textContent = count;
}



function increase(){
    count++;
    value.textContent = count;
}
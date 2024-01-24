const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const input = document.querySelector('input');
const quantity = document.querySelector('.quantity');



//event Listener

minus.addEventListener('click',subtractItem);
plus.addEventListener('click',addItem);

//functions

function subtractItem(){
    console.log(input.value)
}

function addItem(){
    
}
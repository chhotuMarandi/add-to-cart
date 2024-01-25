const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const input = document.querySelector('input');
const quantity = document.querySelector('.quantity');


//event Listener

minus.addEventListener('click',subtractItem);
plus.addEventListener('click',addItem);



let num = +quantity.textContent;
input.value = num;
num = input.value;


//functions

function subtractItem(){
    num--;
    input.value = num;
    console.log(num);
    quantity.textContent = num;
}

function addItem(){
    num++;
    input.value = num;
    console.log(num);
    quantity.textContent = num;
}
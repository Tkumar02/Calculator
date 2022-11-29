const boxes = document.querySelectorAll('.box')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const first = document.querySelector('.first')
const second = document.querySelector('.second')

function addition(x,y){
    return x+y
}



clear.addEventListener('click',function(e){
    display.textContent = 0
})


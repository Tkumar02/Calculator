const boxes = document.querySelectorAll('.box')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const buttons = document.querySelectorAll('button')
const equal = document.getElementById('=')
const operators = document.querySelectorAll('.operator')

let buttonList = []
let calculationList = []
let secondNumber = ''
const operatorList = ['+','-','*','/']
let displayNumber = ''

boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
        display.textContent = e.target.id
    })
})

//Put values of all buttons pressed into a list
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        //check if buttonList already has an operator in it
        if (operatorList.some(i => buttonList.includes(i))){
            //if operator already in place, start creating second number
            secondNumber+=e.target.id
            console.log(secondNumber)
        }
        //if no oeprator in place, work on creating first number, by first appending each number to a buttonList
        else{
            buttonList.push(e.target.id)
            console.log(buttonList)
        }
        //diplay the right number in the text display
        if ((operatorList.includes(e.target.id)) == false){
            displayNumber+=(e.target.id)
            display.textContent = displayNumber
        }
        else{
            displayNumber=''
        }
    })
})

operators.forEach(operator=>{
    operator.addEventListener('click',(e)=>{
        number = ''
        for(let i =0;i<buttonList.length;i++){
            number+=buttonList[i]
        }
        calculationList.push(parseInt(number))
        calculationList.push(e.target.id)
        console.log(calculationList)
    })
})

// operators.forEach(operator=>{
//     operator.addEventListener('click',()=>{
//         let boxone = document.createElement('div')
//         document.body.appendChild(boxone)
//         boxone.textContent = e.target.id
//         console.log('works!')
//     })
//})

function addition() {
    calculationList.push(secondNumber)
    let x = parseInt(calculationList[0])
    let y = parseInt(calculationList[2])
    display.textContent = x+y
}

function substraction() {
    calculationList.push(secondNumber)
    let x = parseInt(calculationList[0])
    let y = parseInt(calculationList[2])
    display.textContent = x-y
}

function multiplication() {
    calculationList.push(secondNumber)
    let x = parseInt(calculationList[0])
    let y = parseInt(calculationList[2])
    display.textContent = x*y
}

function division() {
    calculationList.push(secondNumber)
    let x = parseInt(calculationList[0])
    let y = parseInt(calculationList[2])
    display.textContent = x/y
}

equal.addEventListener('click',(e)=>{
    if(calculationList.includes('+')){
        console.log('addition')
        addition()
    }
    else if(calculationList.includes('-')){
        substraction()
    }
    else if(calculationList.includes('*')){
        multiplication()
    }
    else if(calculationList.includes('/')){
        division()
    }
    buttonList = []
    calculationList = []
    secondNumber = ''
    displayNumber = ''
})

clear.addEventListener('click',function(e){
    display.textContent = 0
    buttonList = []
    calculationList = []
    secondNumber = ''
    displayNumber = ''
})


const boxes = document.querySelectorAll('.box')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const buttons = document.querySelectorAll('button')
const equal = document.getElementById('=')
const operators = document.querySelectorAll('.operator')
const dot = document.getElementById('.')

const operatorList = ['+','-','*','/']
let buttonList = []
let calculationList = []
let secondNumber = ''
let displayNumber = ''
let calc = []

boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
        display.textContent = e.target.id
    })
})

//Put values of all buttons pressed into a list
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        //check if button pressed is a number
        
        if (/\d/.test(e.target.id) || e.target.id == '.'){
            if (/\d/.test(e.target.id) && (displayNumber.includes('.')==false)){
                dot.disabled = false
            }
            else{
                dot.disabled = true
            }
            operators.forEach(operator=>{
                operator.disabled = false
            })
            displayNumber+=(e.target.id)
            display.textContent = displayNumber
            equal.disabled = false
        }
        
        //reset display number after the operator is hit
        else if(operatorList.includes(e.target.id) && (operatorList.some(i => calc.includes(i))==false)){
            calc.push(parseFloat(displayNumber))
            displayNumber=''
            calc.push(e.target.id)
            operators.forEach(operator=>{
                operator.disabled = true
            })
        }
        else if(operatorList.includes(e.target.id) && operatorList.some(i => calc.includes(i))){
            calc.push(parseFloat(displayNumber))
            displayNumber = ''
            calculate()
            calc = []
            let calculation = parseFloat(display.textContent)
            calc.push(calculation)
            calc.push(e.target.id)
            operators.forEach(operator=>{
                operator.disabled = true
            })
        }
        //push display number when '=' is hit
        else{
            calc.push(parseFloat(displayNumber))
        }
        console.log(parseFloat(displayNumber))
        console.log(calc)
    })
})

function calculate(){
    console.log('yes')
    if (calc.length>2){
        x = calc[0]
        y = calc[2]
        if(isNaN(calc[0])||isNaN(calc[2])){
            display.textContent = 'Error'
            calc = []
            displayNumber = ''
            return
        }
        else if (calc[1]=='+'){
            final = x+y
            console.log('or this')
        }
        else if (calc[1]=='-'){
            final = x-y
            console.log('this one')
        }
        else if (calc[1]=='*'){
            final = x*y
            console.log('this maybe')
        }
        else if (calc[1]=='/'){
            final = x/y
            console.log('maybeline')
        }
        display.textContent = Math.round((final) * 10000) / 10000
    }
    else{
        display.textContent = 0
        console.log('somehow not this!')
    }
    calc = []
    displayNumber = ''
    console.log('finished')
    console.log(calc.length)
}


clear.addEventListener('click',function(e){
    display.textContent = 0
    calc = []
    display.textContent = 0
    displayNumber = ''
    operators.forEach(operator=>{
        operator.disabled = false
    })
})

equal.addEventListener('click',calculate)






// //once the operator is hit, record the first number as a number and put it into the calculationList
// operators.forEach(operator=>{
//     operator.addEventListener('click',(e)=>{
//         number = ''
//         for(let i =0;i<buttonList.length;i++){
//             number+=buttonList[i]
//         }
//         calculationList.push(parseInt(number))
//         calculationList.push(e.target.id)
//         //console.log(calculationList)
//     })
// })

// //all four calculation functions, ensure that second number enters the calculation list
// function addition() {
//     calculationList.push(secondNumber)
//     let x = parseInt(calculationList[0])
//     let y = parseInt(calculationList[2])
//     display.textContent = x+y
// }

// function substraction() {
//     calculationList.push(secondNumber)
//     let x = parseInt(calculationList[0])
//     let y = parseInt(calculationList[2])
//     display.textContent = x-y
// }

// function multiplication() {
//     calculationList.push(secondNumber)
//     let x = parseInt(calculationList[0])
//     let y = parseInt(calculationList[2])
//     display.textContent = x*y
// }

// function division() {
//     calculationList.push(secondNumber)
//     let x = parseInt(calculationList[0])
//     let y = parseInt(calculationList[2])
//     display.textContent = x/y
// }



// equal.addEventListener('click',(e)=>{
//     if(calculationList.includes('+')){
//         addition()
//     }
//     else if(calculationList.includes('-')){
//         substraction()
//     }
//     else if(calculationList.includes('*')){
//         multiplication()
//     }
//     else if(calculationList.includes('/')){
//         division()
//     }
//     console.log(calculationList,secondNumber)
//     buttonList = []
//     calculationList = []
//     secondNumber = ''
//     displayNumber = ''
// })

// clear.addEventListener('click',function(e){
//     display.textContent = 0
//     buttonList = []
//     calculationList = []
//     secondNumber = ''
//     displayNumber = ''
// })




//WORKING OUTS
// operators.forEach(operator=>{
//     operator.addEventListener('click',()=>{
//         let boxone = document.createElement('div')
//         document.body.appendChild(boxone)
//         boxone.textContent = e.target.id
//         console.log('works!')
//     })
//})

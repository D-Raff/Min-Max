// functionality
// button vars
const btnMin = document.querySelector("[data-findMin]");

const btnMax = document.querySelector("[data-findMax]");

const btnAdd = document.querySelector("[data-add]");

const btnClear = document.querySelector("[data-clear]");

let arr = [];


let input = document.querySelector('[data-num]')
let output = document.querySelector('[data-res]')

let arrDisplay = document.querySelector("[data-arr]");

// adding numbers to your array
btnAdd.addEventListener('click', function add() {
    arr.push(+input.value)
    arrDisplay.textContent = arr.join();
})


// clear function
function clear (){
    arr = []
    arrDisplay.textContent = ""
}
btnClear.addEventListener('click', clear)

// finding min value
function Min() {
    let res = Math.min(...arr);
    output.textContent = `${res} is the minimum number in this collection`
}
btnMin.addEventListener('click', Min)

// finding max value
function Max() {
    let res = Math.max(...arr);
    output.textContent = `${res} is the maximum number in this collection`
}
btnMax.addEventListener('click', Max)
const range = document.querySelector('input[type="range"]')
const angleGradiant = document.querySelector('.angle-gradient')
const colorOne = document.querySelector('input[type="color"]:nth-child(1)')
const colorTwo = document.querySelector('input[type="color"]:nth-child(2)')
let gradient = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)"

console.log(colorTwo.value);

range.addEventListener("change", () => {
    console.log(range.value)
    angleGradiant.innerText = range.value + "°"
    gradient = `linear-gradient(${range.value}deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)`
})

colorOne.addEventListener("change", () => {
    console.log(colorOne.value);
    gradient 
})

colorTwo.addEventListener("change", () => {
    console.log(colorTwo.value);
})


// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%);
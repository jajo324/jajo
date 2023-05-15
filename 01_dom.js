let h1Element=document.getElementById('h1')
function changeText(){
    h1Element.innerHTML='jestem kliknięty'
} 

h1Element.addEventListener('click', changeText)


const blueBtnElement=document.getElementById("blueBtn")
console.log(blueBtnElement)

function changeBackgroundColor(){
    document.body.style.backgroundColor="lightblue"
}

blueBtnElement.addEventListener('click', changeBackgroundColor)

const randomBtn=document.getElementById("buttonRandom")
const randomNbm=document.getElementById("randomNumber")
function generateRandom(max){
    return Math.floor(Math.random()*max)
}

function randomNumberGenerator(){
    randomNbm.innerHTML=generateRandom(100)
}

randomBtn.addEventListener(`click`,randomNumberGenerator)
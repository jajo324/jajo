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

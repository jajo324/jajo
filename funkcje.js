console.log("zadanie 1 telFortune")
function tellFortune(children,partner,location,job){
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children } kids`)
}
tellFortune(3, "laura","paterek","informatyk")

console.log("zadanie 2 telfortune")
function calculateDogAge(age){
    console.log(`Your doggie is ${age*7} years old in dog years!`)
}
calculateDogAge(2)
console.log("zadanie 3 telfortune")
function calculateSupply(age,amountPerDay){
    const maxAge = 90
    console.log(`You will need ${(maxAge - age)* 365 * amountPerDay} to last you until the ripe old age of ${maxAge}`)

}
calculateDogAge(17,6)
console.log("zadanie 4")
const pi=3.14
function calcCircumfrence(radius){
    console.log(`The area is ${2*pi*radius}`)

}

calcCircumfrence(5)
function calcArea(radius){
    console.log(`The area is ${(pi*radius**2)}`)
}
calcArea(7)
console.log("zadanie 5")

let celsius=10
let Fahrenheit=27
function celsiusToFahrenheit(celsius){
    return celsius*9/5+32
}
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F".`)
function FahrenheitToCelsius(Fahrenheit){
    return (Fahrenheit-32)*5/9

}
console.log(`${Fahrenheit}°F is ${FahrenheitToCelsius(Fahrenheit)}°C".`)
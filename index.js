// 01- Number 
var integer = 102
var float = 13.9

console.log(integer)
console.log (float)

//02- Convert 
var basic = 34
var stringifield = basic.toString()

console.log(stringifield)

//03-Round 

var num = 1.5
var rounded = Math.round(num)

console.log(rounded)

//04-Arithmétique

var test = 12
var bis = 5

console.log(test+bis)
console.log(test-bis)
console.log(test*bis)
console.log(test/bis)
console.log(test**bis)
console.log(test%bis)

//05-Comparaison 

var test = 143
var bis = 219

console.log(test===bis)
console.log(test!==bis)
console.log(test>bis)
console.log(test<bis)

//06-Condition

var limit = 50 
var score = 64 

if (score >= limit){
    console.log("Ok Good!")
} else {
    console.log("Oh nooo")
}

//07- Condition II

var password = "Azerty"

if (password.length>5){
    console.log("The password is secure")
}

//08- Condition III

if (score>=limit && password.length>5){
    console.log("everything is good")
} else if (score>=limit || password.length>5){
    console.log("something is good")
} else {
    console.log("nothing is good")
}

//* Bonus


var random = Math.floor(Math.random() * 7)

if (random === 6){
    console.log("Yes ! I win")
} else {
    console.log("So close ...")
}

//* Bonus II

var month = "March"

switch (month) {
    case "December":
        console.log("Winter")
        break
    case "January":
        console.log("Winter")
        break
    case "February":
        console.log("Winter")
        break
    case "March":
        console.log("Spring")
        break
    case "April":
        console.log("Spring")
        break
    case "May":
        console.log("Spring")
    case "June":
        console.log("Summer")
        break
    case "July":
        console.log("Summer")
        break
    case "August":
        console.log("Summer")
        break
    case "September":
        console.log("Autumn")
        break
    case "October":
        console.log("Autumn")
        break
    case "November":
        console.log("Autumn")

        default: 
		console.log("That's not a season...")
}

//* Bonus III

var roundedNumber = 12.2
if (roundedNumber > Math.ceil(roundedNumber) - 0.5){
    roundedNumber = Math.ceil(roundedNumber)}
    else {roundedNumber = Math.floor(roundedNumber)}

console.log(roundedNumber)

//*Bonus IV
     
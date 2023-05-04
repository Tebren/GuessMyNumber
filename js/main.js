'use strict'

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if(hasDriversLicense) console.log(`I can drive`);

// function logger(){
// 	console.log('My name is Jacek');
// }
// logger()

// function fruitProcessor(apples, oranges){
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// 	return juice
// }

// const appleJuice = fruitProcessor(2,0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
// 	return 2023 - birthYear
// }
// const age1= calcAge1(1991)
// console.log(age1);

// const calcAge2 =function(birthYear){
// 	return 2023-birthYear
// }
// const age2 = calcAge2(1994)
// console.log(age2);

// const calcAge3 = birthYear => 2023 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetaierment = (birthYear, firstName) => {
// 	const age = 2023 - birthYear
// 	const retaierment = 65 - age
// 	return `${firstName} retires in ${retaierment} years`
// }

// const yearsLeft = yearsUntilRetaierment(1991, 'Jacek')
// console.log(yearsLeft);
// const cutPieces = function (fruit) {
// 	return fruit * 4
// }
// const fruitProcessor = function (apples, oranges) {
// 	const applePieces = cutPieces(apples)
// 	const orangePieces = cutPieces(oranges)

// 	const juice = `Jusice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
// 	return juice
// }
// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYear) {
// 	return 2023 - birthYear
// }

// const yearsUntilRetaierment = function (birthYear, firstName) {
// 	const age = calcAge(birthYear)
// 	const retaierment = 65 - age
// 	if (retaierment > 0) {
// 		return retaierment
// 	} else {
// 		return -1
// 	}

// 	// return `${firstName} retires in ${retaierment} years`
// }
// console.log(yearsUntilRetaierment(1991, 'Jacek'))
// console.log(yearsUntilRetaierment(1953, 'Janusz'))

//najczęstszy zapis tablicy
/*const friends = ['Michael', 'Steven', 'Peter']

const y = new Array(1991, 1999, 2010, 2020)
//zapis tablicy jako funkcji

console.log(friends[0])
//pierwszy element w tablicy

console.log(friends[2])
//trzeci element w tablicy

console.log(friends.length)
//sprawdza długość tablicy

console.log(friends[friends.length - 1])
//wylogowuje ostatni element tablicy

friends[2] = 'Jay'
console.log(friends)
//zmienia trzeci element tablicy

const firstName = 'Jacek'
const Jacek = [firstName, 'Węgrzynowicz', 2023 - 1991, friends]
console.log(Jacek)
// //tablica może zawierać różne wartości np:  String, Number, Wyrażenie, Inną tablicę

const calcAge = function (birthYear) {
	return 2023 - birthYear
}
const years = [1991, 1994, 1996, 2019]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)
const ages2 = [age1, age2, age3]
console.log(ages2)

const friends2 = ['John', 'Steven', 'Michael']

if (friends2.includes('Steven')) {
	console.log('I have a freind called Steven')
} else {
	console.log('I dont have a friend called Steven')
}

const jacekArray = ['Jacek', 'Węgrzynowicz', 2023 - 1991, 'student', ['Jackob', 'Adam', 'Kamil']]

const jacekObject = {
	firstName: 'Jacek',
	lastName: 'Węgrzynowicz',
	age: 2023 - 1991,
	job: 'student',
	friends: ['Jackob', 'Adam', 'Kamil'],
}

// console.log(jacekObject.lastName)
// console.log(jacekObject['lastName'])

// const nameKey = 'Name'
// console.log(jacekObject['first' + nameKey])
// console.log(jacekObject['last' + nameKey])

// const interestedIn = prompt(
// 	'What do you want to know about Jacek? Choose between firstName, lastName, age, job, and friends '
// )

// if (jacekObject[interestedIn]) {
// 	console.log(jacekObject[interestedIn])
// } else {
// 	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jacekObject.location = 'Poland'
// jacekObject['language'] = 'Polish'
// console.log(jacekObject)



// CHALLENGE

// 'Jacek has 3 friends, and his best friend is called Jackob'

console.log(`${jacekObject.firstName} has ${jacekObject.friends.length} friends, and his best friend is called ${jacekObject.friends[1]}`);

*/
/*
const jacekObject = {
	firstName: 'Jacek',
	lastName: 'Węgrzynowicz',
	birthYear: 1991,
	job: 'student',
	friends: ['Jackob', 'Adam', 'Kamil'],
	hasDriverLicense: true,

	calcAge: function () {
		this.age = 2023 - this.birthYear
		return this.age
	},
	getSummary: function(){
		return `${this.firstName} ia a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense?`a`:`no`} driver's license`

	}
}
console.log(jacekObject.calcAge())
console.log(jacekObject.age)
console.log(jacekObject.age)

console.log(jacekObject.getSummary());

*/

// for (let i = 1; i <= 10; i++) {
// 	console.log(`Lifting weights repetition ${i} 🏋️`);
// }

// const jacekArray = ['Jacek', 'Węgrzynowicz', 2023 - 1991, 'student', ['Jackob', 'Adam', 'Kamil']]

// for (let i = 0; i < jacekArray.length; i++) {
// 	if (typeof jacekArray[i] === 'number') break

// 	console.log(jacekArray[i])
// }

// // const years = [1991, 1994, 1996, 2019]
// // const ages = []

// // for (let i = 0; i < years.length; i++) {
// // 	ages.push(2023 - years[i])
// // }

// // console.log(ages)

// const jacekArray = ['Jacek', 'Węgrzynowicz', 2023 - 1991, 'student', ['Jackob', 'Adam', 'Kamil']]

// for (let i = jacekArray.length - 1; i >= 0; i--) {
// 	console.log(jacekArray[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
// 	console.log(`-------- Starting exercise ${exercise}`)
// 	for (let i = 1; i <= 5; i++) {
// 		console.log(`Exercise ${exercise}: Lifting weight repetition ${i} 🏋️`)
// 	}
// }

// let i = 1

// while (i <= 10) {
// 	// console.log(`Lifting weight repetition ${i} 🏋️`)
// 	i++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}`)
// 	dice = Math.trunc(Math.random() * 6) + 1
// 	if(dice===6)console.log(`You roll a 6!!!! 🏆`);
// }

//--------------------------------------------- Developer skills & editor setiup ----------------------------------------------
// const temperature=[2,5,6,7,4,345,67,12,-123,45,'error',12,4567,1]
// const calcTempAmplitude = function (temps) {
// 	let max = 0
// 	let min = 0

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i]
// 		if (typeof curTemp !== 'number') continue
// 		if (curTemp > max) {
// 			max = curTemp
// 		}
// 		if (curTemp < min) {
// 			min = curTemp
// 		}
// 	}
// 	return max- min
// 	console.log(max)
// 	console.log(min)
// }

// const amplitude = calcTempAmplitude(temperature)
// console.log(amplitude);



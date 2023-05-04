'use strict'
// Challenge 1
/*
const massMark = 78
const heightMark = 1.69
const massJohn = 95
const heightJohn = 1.95

const bmiMark = massMark / heightMark ** 2
console.log(bmiMark)

const bmiJohn = massJohn / heightJohn ** 2
console.log(bmiJohn)

const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)
*/
// Challenge 2
/*
if (bmiMark > bmiJohn) {
	console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
} else {
	console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
}
*/
//Challenge 3
/*
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3
console.log(scoreDolphins)
console.log(scoreKoalas)

if (scoreDolphins > scoreKoalas) {
	console.log('Dolphins win  the trophy🏆')
} else if (scoreKoalas > scoreDolphins) {
	console.log('Koalas win the trophy 👏')
} else if (scoreDolphins === scoreKoalas) {
	console.log('Both win the trophy ')
}
*/
/*
const scoreDolphins = (109 + 95 + 90) / 3
const scoreKoalas = (109 + 95 + 90) / 3
console.log(scoreDolphins)
console.log(scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	console.log('Dolphins win  the trophy🏆')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
	console.log('Koalas win the trophy 👏')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
	console.log('Both win the trophy ')
}
*/
//Challenge 4
/*
const bill = 430
const tip1 = bill * 0.15
const tip2 = bill * 0.2
bill >= 50 && bill <= 300
	? console.log(`The bill was ${bill}, the tip was ${tip1}, and the total value is ${bill + tip1}`)
	: console.log(`The bill was ${bill}, the tip was ${tip2}, and the total value is ${bill + tip2}!`)
*/

//challenge 5

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const dolphinsAvg = calcAverage(85, 54, 41)
// const koalasAvg = calcAverage(23, 34, 27)

// const checkWinner = function (avgDolphins, avgKoalas) {
// 	if (dolphinsAvg >= koalasAvg * 2) {
// 		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}) 🤟`)
// 	} else if (koalasAvg >= dolphinsAvg * 2) {
// 		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) 👏`)
// 	} else {
// 		console.log(`There is no winnner 😞`)
// 	}
// }

// checkWinner(dolphinsAvg, koalasAvg)

//challenge 6
/*
const calcTip = function (bills) {
	return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}

const bills=[125,555,44]

const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

console.log(tips);

const totals= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(totals);

*/

//challenge 7
/*
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
	},
}

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
	},
}

if (mark.calcBMI() > john.calcBMI()) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.calcBMI() > markBMI.calcBMI()) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

//challenge 8

/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const arr = []

const calcTip = function (bills) {
	return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
for (let i = 0; i < bills.length; i++) {
	tips[i] = calcTip(bills[i])
	totals[i] = tips[i] + bills[i]
}

console.log(tips)
console.log(totals)

const calcAverage = function (arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		// sum = sum + arr[i]
		sum += arr[i]
	}
	return sum/arr.length
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

//Napisz kod, który dla zdefiniowanej szkolnej oceny (1,2,3,4,5,6) - zmienna ocena - wypisze jej opis słowny np. dostateczny. Informacja ma być wypisana w div-ie id="opisoceny".

// const evaluation = 6

// switch(evaluation){
// 	case 1: console.log('niedostateczny 1️⃣');
// 	break
// 	case 2: console.log('dopuszczający 2️⃣');
// 	break
// 	case 3: console.log('dostateczny 3️⃣');
// 	break
// 	case 4: console.log('dobry 4️⃣');
// 	break
// 	case 5: console.log('bardzo dobry 5️⃣');
// 	break
// 	case 6: console.log('celujący 6️⃣');
// 	break
// }

//Zbadaj wartość logiczną wyrażeń: "",0,null,undefined,"abc"," ",7,-45

// const array1=["",0,null,undefined,"abc"," ",7,-45]
// for(let i=0;i<array1.length;i++){
// 	console.log(typeof array1[i]);
// }

//Napisz skrypt, który dla 0, wypisze w konsoli tekst "Zero", dla innych liczb tekst "Liczba różna od zera".
// let zero =
// if (zero === 0) {
// 	console.log('zero 0️⃣')
// } else {
// 	console.log(`${zero} is different from 0️⃣`)
// }
//---------------------------------------------------------------------------------------------
//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in seconds.

// const calcHour = function (h, m, s) {
// 	const miliSecond = h * 3600000 + m * 60000 + s * 1000
// 	return miliSecond
// }

// const time = calcHour(7, 55, 6)

// console.log(time)

const array = [17, 21, 23]
const array2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
	let str = ''
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}°C in ${i + 1} days ... `
	}
	console.log('...' + str)
}
printForecast(array2)

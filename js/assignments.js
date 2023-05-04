'use strict'
// 1. Values and Variables
let country = 'Poland'
let continent = 'Europe'
let population = 37500000
let capitalCity = 'Warsaw'

console.log(country)
console.log(continent)
console.log(population)

// 2.Data types
let isIsland = true
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// 3.let, const and var
language = 'polish'

const finlandPopulation = 6000000
const averagePopulation = 33000000
console.log(population > finlandPopulation)
console.log(population < averagePopulation)

// Templete Literals
console.log(`${country} is in ${continent}, and its ${population} people speak ${language}`)

// if/else
if (population >= 33000000) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${33000000 - population} below average`)
}

console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

/*const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
if(numNeighbours===1){
    console.log('Only 1 border!');
}else if(numNeighbours>1){
    console.log("More than 1 border");
}else{
    console.log("No borders");
}*/
if (language === 'English' && population < 50000000 && isIsland) {
	console.log(`You should live in ${country} 😁`)
} else {
	console.log(`${country} does not meet your criteria 😞`)
}

switch (language) {
	case 'chinese':
		console.log('MOST number of nayive speakers!')
		break
	case 'spanish':
		console.log('2nd place in number of native speakers')
		break
	case 'english':
		console.log('3rd place')
		break
	case 'hindi':
		console.log('Number 4')
		break
	case 'arabic':
		console.log('5th most spokrn language')
		break
	default:
		console.log('Great language too 😁')
}

population >= 33000000
	? console.log(`${country}'s population is above average`)
	: console.log(`${country}'s population is below average`)

function describeCountry(country, population, capitalCity) {
	const myCountry = `${country} has ${population} people and its capital city is ${capitalCity}`
	return myCountry
}

const myCountryDesctiption = describeCountry(country, population, capitalCity)
const countryAmerica = describeCountry('America', 332000000, 'Washington')
const countryGerman = describeCountry('Germany', 83000000, 'Berlin')
console.log(myCountryDesctiption)
console.log(countryAmerica)
console.log(countryGerman)

// function perecentageOfWorld1(population) {
// 	return (population / 7900) * 100
// }

// const chinaPopulation = perecentageOfWorld1(1441)
// console.log(chinaPopulation)
// const americaPopulation = perecentageOfWorld1(332)
// console.log(americaPopulation)
// const indiaPopulation = perecentageOfWorld1(1408)
// console.log(indiaPopulation)

// const perecentageOfWorld2 = function (population) {
// 	return (population / 7900) * 100
// }
// const indonesiaPopulation = perecentageOfWorld2(277)
// const canadaPopulation = perecentageOfWorld2(38)
// const estoniaPopulation = perecentageOfWorld2(1)
// console.log(indonesiaPopulation, canadaPopulation, estoniaPopulation)

const perecentageOfWorld3 = population => (population / 7900) * 100

const chinaPopulation = perecentageOfWorld3(1441)
const americaPopulation = perecentageOfWorld3(332)
const indiaPopulation = perecentageOfWorld3(1408)
const polandPopulation = perecentageOfWorld3(38)
console.log(chinaPopulation, americaPopulation, indiaPopulation)

const describePopulation = function (country, population) {
	const percentage = perecentageOfWorld3(population)
	const description = `${country} has ${population} milion people, which is about ${percentage}% of the world`
	console.log(description)
}
describePopulation('Poland', 38000000)
describePopulation('China', 1441000000)
describePopulation('America', 332000000)

const populations = [1441, 332, 1408, 38]
console.log(populations.length === 4)
const perentages = [
	perecentageOfWorld3(populations[0]),
	perecentageOfWorld3(populations[1]),
	perecentageOfWorld3(populations[2]),
	perecentageOfWorld3(populations[3]),
]
console.log(perentages)

// neighbours.push('Utopia')
// neighbours.pop()

// if (neighbours.includes('German')) {
// 	console.log('Country in central Europe')
// } else {
// 	;('Probably not a central European country')
// }

const neighbours = ['German', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia']
neighbours[neighbours.indexOf('Russia')] = 'Free republic of Rusland'
console.log(neighbours)

const myCountry = {
	country: 'Poland',
	capital: 'Warsaw',
	language: 'Polish',
	population: 37,
	neighbours: ['German', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],

	describe: function () {
		return `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
	},

	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false
	},
}

console.log(myCountry.describe())
myCountry.checkIsland()
console.log(myCountry)
// myCountry.population +=2
myCountry['population'] -= 2

// console.log(
// 	`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}`
// )

for (let i = 1; i <= 50; i++) {
	console.log(`Voter number ${i} is currently voting 📝`)
}
const percentages2 = []

for (let i = 0; i < populations.length; i++) {
	const perc = perecentageOfWorld3(populations[i])
	percentages2.push(perc)
}

console.log(percentages2)

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for (let i = 0; i < listOfNeighbours.length; i++){
	for (let y = 0; y < listOfNeighbours[i].length; y++){
		console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
	}

}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
const perc = perecentageOfWorld3(populations[i]);
percentages3.push(perc);
i++;
}
console.log(percentages3);



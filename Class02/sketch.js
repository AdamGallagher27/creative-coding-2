

// let table = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];

// // array map

// // anonymous arrow function 
// // call back for map function
// let newTable = table.map(element => element.id)

// // old way before es6
// // works the same way but ugly
// let old = table.map(function(element) {
//   return element.id
// })


// // array filter
// // takes in a conditotion and runs 
// // this adds elements to a new array with names that begin with C
// let filtered = table.filter(element => element.name[0] == "C")

// console.log(newTable)
// console.log(filtered)


// filter

let pilots = [
	{
		id: 10,
		name: "Poe Dameron",
		years: 14,
	},
	{
		id: 2,
		name: "Temmin 'Snap' Wexley",
		years: 30,
	},
	{
		id: 41,
		name: "Tallissan Lintra",
		years: 16,
	},
	{
		id: 99,
		name: "Ello Asty",
		years: 22,
	}
];


let factions = [
	{
		id: 2,
		name: "Wedge Antilles",
		faction: "Rebels",
	},
	{
		id: 8,
		name: "Ciena Ree",
		faction: "Empire",
	},
	{
		id: 40,
		name: "Iden Versio",
		faction: "Empire",
	},
	{
		id: 66,
		name: "Thane Kyrell",
		faction: "Rebels",
	}
];

// filters rebels and empiricals and adds them to there own new array
let rebels = factions.filter(element => element.faction === 'Rebels')
let empire = factions.filter(element => element.faction === 'Empire')

// console.log(rebels)
// console.log(empire)


let luas
let luasTidy = []

function preload() {
	luas = loadTable('./data/LUAS_Flow.csv', 'csv', 'header');
}

function setup() {
	for(let i = 0; i < luas.getRowCount(); i++) {
		luasTidy.push(luas.rows[i].obj)
	}

	console.log(luasTidy)

	// filters the statistic lable and year
	let redLine = luasTidy.filter(train => train["Statistic Label"] === 'Average Red Line Flow' && train.Year == 2018)
	console.log(redLine)

	// maps new array of objects with day and value (as an int not a string)
	let days = redLine.map(train => ( {day:train["Days of Week"], value: +(train.VALUE)}) )

	// console.log(days)

	// reducer has an acumulator and you describe how it should accumulate
	let start =  0
	let reduced = days.reduce((accumulator,currentValue ) => accumulator + currentValue.value, start)

	console.log(reduced)


	let experience = pilots.reduce((accumulator, currentValue) => accumulator + currentValue.years, 0)

	let mostYears = pilots.reduce((accumulator, currentValue) => (accumulator.years || 0) > currentValue.years ? accumulator:currentValue, {} )

	console.log(mostYears)
}
function draw() {

}
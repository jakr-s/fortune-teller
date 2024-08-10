// Get random number function
const random = (num) => Math.floor(Math.random() * num);

// Object containing messages
const possibleFutures = {
	nearFuture: [
		"you will be attacked by a gang of rabid horses",
		"a winning lottery ticket will fall onto your lap",
		"your local vicar declares that you are the messiah",
	],
	resultsIn: [
		"you learn the true meaning of friendship",
		"wacky hijinks ensue",
		"you open a succesful themed restaraunt",
	],
	onlyIf: [
		"you fix your credit score",
		"the moon is aligned with your chakras",
		"you hire the author of this script as a junior developer",
	],
};

// Empty array to push messages to
const theFuture = [];

// Iterate over object
for (let item of Object.keys(possibleFutures)) {
	// Get random index of object array
	let randomIndex = random(possibleFutures[item].length);
	// Push random sentence to empty array
	switch (item) {
		case "nearFuture":
			theFuture.push(
				`In the near future, ${possibleFutures[item][randomIndex]}.`
			);
			break;

		case "resultsIn":
			theFuture.push(`And as a result, ${possibleFutures[item][randomIndex]}.`);
			break;

		case "onlyIf":
			theFuture.push(`But only if ${possibleFutures[item][randomIndex]}.`);
			break;
		// Only prints if error occurs
		default:
			theFuture.push("An evil spirit is interfering with my script");
			break;
	}
}

// Joins message array with line break
const printFuture = (arr) => arr.join("\n");

//log message to console
console.log(printFuture(theFuture));

// TODO
/*
 * Allow user input (name, location)
 * Add more messages
 * Turn into web app
 * Refactor / Cleanup
 */

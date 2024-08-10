// Function to generate a random integer up to a given number
const getRandomIndex = (num) => Math.floor(Math.random() * num);

// Object containing possible messages for the future
const possibleFutures = {
	nearFuture: [
		"you will be attacked by a gang of moths",
		"a winning lottery ticket will fall onto your lap",
		"your local vicar declares that you are the messiah",
	],
	resultsIn: [
		"you learn the true meaning of friendship",
		"wacky hijinks ensue",
		"you open a successful themed restaurant",
	],
	onlyIf: [
		"you fix your credit score",
		"the moon is aligned with your chakras",
		"you DM me a picture of your cat",
	],
};

// Generate a future prediction
const generatePrediction = () => {
	return Object.keys(possibleFutures)
		.map((key) => {
			const randomMessage =
				possibleFutures[key][getRandomIndex(possibleFutures[key].length)];
			switch (key) {
				case "nearFuture":
					return `In the near future, ${randomMessage}.`;
				case "resultsIn":
					return `And as a result, ${randomMessage}.`;
				case "onlyIf":
					return `But only if... ${randomMessage}.`;
				default:
					return "An evil spirit is interfering with my script.";
			}
		})
		.join("\n");
};

// Generate and log the future prediction
const theFuture = generatePrediction();
console.log(theFuture);

/* prettier-ignore */
console.log(`
                     .---.
                   .'_..._'.
                  .''_   _''.
                 .' :  '  : '.
                .'_.-'_~_'-._'.
               .'(     '     )'.
              .'  \\ \\     / /  '.
             .'    \\ \\   / /    '.
       ____________'''\` '\`\`\`____________
      /              .''.               \\
     /              (  \` )               \\
    /               .'..'.                \\
   /                '----'                 \\
  /_________________________________________\\
    \\  /'--'                       '--'\\  /
     ||                                 ||
     ||                                 ||
    _||_                               _||_
    '--'                               '--'  
`)

// TODO
/*
 * Allow user input (name, location)
 * Add more messages
 * Turn into web app
 * Refactor / Cleanup
 */



//they/them pronoun corrections
const pronouns = [
	{
		original: ["they're", "she's"],
		correction: "he's"
	},
	{
		original: ["they are", "she is"],
		correction: "he is"
	},
	{
		original: ["they were", "she was"],
		correction: "he was"
	},
	{
		original: ["they have", "she has"],
		correction: "he has"
	},
	{
		original: ["they love", "she loves"],
		correction: "he loves"
	},
	{
		original: ["they become", "she becomes"],
		correction: "he becomes"
	},
	{
		original: ["themself", "herself"],
		correction: "himself"
	},
	{
		original: ["they", "she"],
		correction: "he"
	},
	{
		original: ["their", "hers"],
		correction: "his"
	},
	{
		original: ["them", "her"],
		correction: "him"
	}
];


//get value of input text and convert pronouns on button click
const textarea = document.getElementById("text-box");
const correctButton = document.getElementById("button");

correctButton.addEventListener("click", () => {
	textarea.value = convertText(textarea.value, pronouns);
});

function convertText(text, dictionary) {
	let convertedText = text;

	dictionary.forEach((item) => {
		const matchOriginal = new RegExp(
			item.original.map((original) => `(\\b${original}\\b)`).join("|"),
			"gmi"
		);

//have capitalized pronouns corrected
		const replace = (word) => {
			const isAllCaps = Boolean(word.match(/^[^a-z]*$/));
			const isTitleCase = Boolean(word.match(/^(?:[A-Z][^\s]*\s?)+$/));
			const isCapitalized = Boolean(word.match(/^[A-Z]/));

			if (isAllCaps) {
				return item.correction.toUpperCase();
			} else if (isTitleCase) {
				return item.correction
					.split(" ")
					.map((i) => i.charAt(0).toUpperCase() + i.slice(1))
					.join(" ");
			} else if (isCapitalized) {
				return item.correction.charAt(0).toUpperCase() + item.correction.slice(1);
			} else {
				return item.correction;
			}
		};

		convertedText = convertedText.replace(matchOriginal, replace);
	});

	return convertedText;
}

/*function myFunction() {
  var str = document.getElementById("text").innerHTML; 
  var res = str.replace("guys", "everyone");
  document.getElementById("text").innerHTML = res;
}

function displayText() {
	var x = document.getElementById("text-box").value;
	document.getElementById("text").innerHTML = x;
}

function correctText() {
  var str = document.getElementById("text").innerHTML; 
  var res = str.replace("he", "they");
  document.getElementById("text").innerHTML = res;
}

function correctText() {
	document.getElementById('text').textContent = str
	    .replace(/(\bhe\b)|(\bshe\b)/gi, 'they')
	    .replace(/(\bhis\b)|(\bher\b)/gi, 'their')
	    .replace(/\bhim\b/gi, 'them')
}

//list of pronouns and changes to make
/*he 
he is
he was
him
his
she
she is
she was
her
hers

they
they are
they were
them
their
theirs*/

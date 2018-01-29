function enter() {
	let input = document.getElementById("input").value;
}
var letters = input.split("");
for (var i = 0; i < letters.length; i++) {
	letters[i] = letters[i].toLowerCase();
	switch(letters[i]) {
		case "a":
			letters[i] = ")";
			break;
		case "b":
			letters[i] = "/";
			break;
		case "c":
			letters[i] = "?";
			break;
		case "d":
			letters[i] = ">";
			break;
		case "e":
			letters[i] = "_"
			break;
		case "f":
			letters[i] = "<";
			break;
		case "g":
			letters[i] = ",";
			break;
		case "h":
			letters[i] = ";";
			break;
		case "i":
			letters[i] = ":";
			break;
		case "j":
			letters[i] = "'";
			break;
		case "k":
			letters[i] = "|";
			break;
		case "l":
			letters[i] = "[";
			break;
		case "m":
			letters[i] = "{";
			break;
		case "n":
			letters[i] = "]";
			break;
		case "o":
			letters[i] = "}";
			break;
		case "p":
			letters[i] = "`";
			break;
		case "q":
			letters[i] = "~";
			break;
		case "r":
			letters[i] = "!";
			break;
		case "s":
			letters[i] = "@";
			break;
		case "t":
			letters[i] = "#";
			break;
		case "u":
			letters[i] = "$";
			break;
		case "v":
			letters[i] = "%";
			break;
		case "w":
			letters[i] = "^";
			break;
		case "x":
			letters[i] = "&";
			break;
		case "y":
			letters[i] = "*";
			break;
		case "z":
			letters[i] = "(";
			break;
	}}
letters = letters.join("");
alert(letters);

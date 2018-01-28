var input = "";
var letters = input.split("");
for (var i = 0; i < letters.length; i++) {
	letters[i] = letters[i].toLowerCase();
	switch(letters[i]) {
		case ")":
			letters[i] = "a";
			break;
		case "/":
			letters[i] = "b";
			break;
		case "?":
			letters[i] = "c";
			break;
		case ">":
			letters[i] = "d";
			break;
		case "_":
			letters[i] = "e"
			break;
		case "<":
			letters[i] = "f";
			break;
		case ",":
			letters[i] = "g";
			break;
		case ";":
			letters[i] = "h";
			break;
		case ":":
			letters[i] = "i";
			break;
		case "'":
			letters[i] = "j";
			break;
		case "|":
			letters[i] = "k";
			break;
		case "[":
			letters[i] = "l";
			break;
		case "{":
			letters[i] = "m";
			break;
		case "]":
			letters[i] = "n";
			break;
		case "}":
			letters[i] = "o";
			break;
		case "`":
			letters[i] = "p";
			break;
		case "~":
			letters[i] = "q";
			break;
		case "!":
			letters[i] = "r";
			break;
		case "@":
			letters[i] = "s";
			break;
		case "#":
			letters[i] = "t";
			break;
		case "$":
			letters[i] = "u";
			break;
		case "%":
			letters[i] = "v";
			break;
		case "^":
			letters[i] = "w";
			break;
		case "&":
			letters[i] = "x";
			break;
		case "*":
			letters[i] = "y";
			break;
		case "(":
			letters[i] = "z";
			break;
	}}
letters = letters.join("");
console.log(letters);
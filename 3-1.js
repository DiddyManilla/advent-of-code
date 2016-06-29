var input = prompt("Directions:");
var coord = [0, 0];
var visited = "0, 0;";
var numVisited = 1;
for (var i = 0; i < input.length; i++) {
	if (input.charAt(i) == "^") {
		coord[1]++;
	} else if (input.charAt(i) == ">") {
		coord[0]++;
	} else if (input.charAt(i) == "v") {
		coord[1]--;
	} else if (input.charAt(i) == "<") {
		coord[0]--;
	}
	if (!(visited.includes(coord[0] + ", " + coord[1] + ";"))) {
		visited += coord[0] + ", " + coord[1] + ";";
		numVisited++;
	}
}
console.log(visited);
console.log(numVisited);
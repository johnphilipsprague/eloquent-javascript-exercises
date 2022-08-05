// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

const makeTriangle = (height) => {
	for (let i = 1; i <= height; i++) {
		console.log(Array(i).fill("#").join(""))
	}
}

makeTriangle(7)

// Book solution:

// for (let line = "#"; line.length < 8; line += "#")
// console.log(line);

/*
Personal note:

While I do think that my solution favors readability and follows best practice,
Marijn's solution is a reminder that JavaScript is not as rigid as convetion
would make you think.

The initializing, conditional, and increment expressions in a for loop seek only
an expression, a boolen, and an alteration to the defined initialExpression respectively.

While I do favor readability over most things, I can't let that limit my understanding of
JavaScript's potential.
*/

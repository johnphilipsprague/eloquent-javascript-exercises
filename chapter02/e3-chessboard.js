/*
Prompt:
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

/*
Approach:

I think how I want to approach this is to use a nested loop to create a matrix of spaces and #. Time complexity will be real bad

After the first row has been made starting with a space, I will check the first or last index of previous array to determine what character to start with.

Once the matrix has been finished and it has based all the checks, I will execture a .join with "/n" as the arguement on the main array
*/

const chessboardMaker = (size) => {
	const columns = []
	for (let i = 0; i < size; i++) {
		const row = []
		for (let j = 0; j < size; j++) {
			let square
			if (!row.length && !columns.length) square = " "
			else if (!row.length) square = columns[i - 1][0] === "#" ? " " : "#"
			else square = row[j - 1] === "#" ? " " : "#"
			row.push(square)
		}
		if (i !== size - 1) row.push("\n")
		columns.push(row.join(""))
	}
	console.log(columns.join(""))
}

chessboardMaker(8)

/*
Marijn's solution:

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
*/

/*
Personal note:

While my solution is certainly more verbose than Marijn's, I am still content. What mine lacks in mathematical prowess, I think it makes up for in readability. Perhaps that is a bias opinion to me due to the fact that I personally think that arrays are much easier to understand.

I also think that line 39 was quite clever if I do say so myself.

One last thing to note is that Chapter One of Eloquent JavaScript is a chapter that I've read before, back in December of 2021 when I had only been coding for 4 months. This was prior to my attending of Fullstack Academy, so I was exclusively self-taught save for a few things my eldest brother taught me (specifically in regards to time complexity).

I say all of that because I was and am very proud of the solution I came up with at the time. Its clear that my logic was much more math based back then (were as now its more focused on readability), and I clearly had specific goal of attaining O(n) time.


let board = ""

for (let i = 1, b = 8; i <= b * b + b; i++) {
	if (i % (b + 1) === 0) {
		board += "\n"
		continue
	}

	if (i % 2 === 0) board += "#"
	else board += " "
}

console.log(board)
*/

/*
Prompt:

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

*/
const countBs = (str) => countChar(str, "B")

const countChar = (str, char) => {
	let count = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) count++
	}

	return count
}

console.log(countBs("BBC"))
// → 2
console.log(countChar("kakkerlak", "k"))
// → 4

/*
Marijn's solution:

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
*/

/*
Personal note:

Our code is exactly the same, save for some minor syntax.

A fun exercise, though I will say that Chapter03's exercise have been significantly easier than chapter02's. I guess it comes down to preconceptions. If someone was actually completely new to coding and only had chapter02's content to build their knowledge with, perhaps they would have come to their solutions much faster than I. An interesting thought.
*/

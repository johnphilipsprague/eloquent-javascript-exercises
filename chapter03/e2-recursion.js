/*
Prompt:

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

const isEven = (num) => {
	const recursionHelper = (num) => {
		//negative edge case
		if (num < 0) num = -num
		// base case
		if (num === 0 || num === 1) return num

		return recursionHelper(num - 2)
	}

	return recursionHelper(num) ? false : true
}

console.log(isEven(50))
// → true
console.log(isEven(75))
// → false
console.log(isEven(-1))
// → ??

/*
Marijn's solution:

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
*/

/*
Personal note:

I love recursion.

This is a tough call, I imagine there is a lot of discussion on how to best format recursive functions. In this instance I think I prefer mine here, though Marijn's approach to the negative edge case feels a bit classier.
*/

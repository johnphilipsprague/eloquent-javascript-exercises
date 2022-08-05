/*
Prompt:
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

const fizzBuzz = (count) => {
	for (let i = 1; i <= count; i++) {
		let output = ""

		if (i % 3 === 0) output += "Fizz"
		if (i % 5 === 0) output += "Buzz"
		if (output === "") output = i

		console.log(output)
	}
}

fizzBuzz(100)

/*
Marijn's solution:

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/

/*
Personal note:

I was close to capturing Marijn's solution this exercise, even having the same variable name inside our for loops.

Where I fell short though was their clever use of "short-circuit evaluation" to fall back to a default inside their console.log.

I will have to get better at identifying when that is a viable tactic, if only because I think it looks cool.
*/

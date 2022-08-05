/*
Prompt:

Write a function min that takes two arguments and returns their minimum.
*/

const min = (num1, num2) => (num1 > num2 ? num2 : num1)

console.log(min(0, 10))
// → 0

console.log(min(0, -10))
// → -10

/*
Marijn's solution:

function min(a, b) {
  if (a < b) return a;
  else return b;
}
*/

/*
Personal note:

Here I feel the fool. The previous chapter Marijn seemed to prioritize flexing demonstrations of JavaScripts nuances, so I assumed their solutions for this chapter would follow a similar theme.

I showed an understanding of conditionals and implicit returns at the cost of readability. I disregarded my own standards in an attempt to replicate someone elses style. Oops.

#stayhumble
*/

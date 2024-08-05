// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hmap = { ")": "(", "}": "{", "]": "[" };
  const stack = [];

  for (const key in s) {
    const element = s[key];
    console.log({element})
    console.log({stack})

    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
      continue;
    }
    if (hmap[element] !== stack[key - 1]) {
      return false;
    }
    stack.pop();
  }

  return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false

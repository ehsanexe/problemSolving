/**
Design an algorithm to encode a list of strings to a single string. 
The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]

Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
 */

/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let res = "";

  for (s of strs) {
    res += s.length + "#" + s;
  }

  return res;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  const res = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "#") {
      res.push(str.slice(i + 1, i + 1 + +str[i - 1]));
    }
  }

  return res;
}

let encoded = encode(["neet", "code", "love", "you"]);
let decoded = decode(encoded);
console.log({ encoded, decoded });

encoded = encode(["we", "say", ":", "yes"]);
decoded = decode(encoded);
console.log({ encoded, decoded });

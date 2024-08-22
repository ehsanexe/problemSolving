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
    res += `${s.length}#${s}`;
  }

  return res;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  const res = [];

  let i = 0;

  while (i < str.length) {
    let j = i;

    while (str[j] !== "#") {
      j++;
    }
    const length = parseInt(str.substring(i, j));

    j++;
    res.push(str.slice(j, j + length));
    j = j + length;
    i = j;
  }

  return res;
}

let encoded = encode(["neet", "code", "lov#4e", "you"]);
let decoded = decode(encoded);
console.log({ encoded, decoded });

encoded = encode(["we", "say", ":", "yes"]);
decoded = decode(encoded);
console.log({ encoded, decoded });

encoded = encode(["10characters1234567890", "3#@#$#$%"]);
decoded = decode(encoded);
console.log({ encoded, decoded });

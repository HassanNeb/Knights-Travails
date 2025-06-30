// functions.js

function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

function caesarCipher(str, shift) {
    return str
        .split("")
        .map((char) => {
            const code = char.charCodeAt(0);

            // Uppercase A-Z
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // Lowercase a-z
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }

            // Non-alphabetical characters remain unchanged
            return char;
        })
        .join("");
}

function analyzeArray(arr) {
    const length = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { average, min, max, length };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};

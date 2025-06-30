// functions.test.js
const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require("./functions");

test("capitalize first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("h")).toBe("H");
    expect(capitalize("hello world")).toBe("Hello world");
});

test("reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
});

describe("calculator", () => {
    test("adds two numbers", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("subtracts two numbers", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test("multiplies two numbers", () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test("divides two numbers", () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
});

describe("caesarCipher", () => {
    test("shifts characters correctly", () => {
        expect(caesarCipher("abc", 1)).toBe("bcd");
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test("preserves case", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("keeps punctuation and spaces", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("wraps uppercase correctly", () => {
        expect(caesarCipher("XYZ", 2)).toBe("ZAB");
    });
});

test("analyze array of numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

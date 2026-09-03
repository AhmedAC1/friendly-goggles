const math = {
  add(a: number, b: number) {
    return a + b;
  },
  sub(a: number, b: number) {
    return a - b;
  },
  mul(a: number, b: number) {
    return a * b;
  },
  div(a: number, b: number) {
    return a / b;
  },
  square(x: number) {
    return x * x;
  },
  split(x: number, canHaveFloat: boolean) {
    if (canHaveFloat) {
      return x / 2;
    } else {
      return Math.floor(x / 2);
    }
  },
  circle(x: number) {
    return Math.PI * x * x;
  },
  triangle(base: number, height: number) {
    return 0.5 * base * height;
  },
  pi() {
    return Math.PI;
  },
  powerOf(a: number, b: number) {
    return a ** b;
  },
  sine(x: number) {
    return Math.sin(x);
  },
  radian(deg: number) {
    return deg * Math.PI / 180;
  },
  degree(rad: number) {
    return rad * 180 / Math.PI;
  },
  tan(x: number) {
    return Math.tan(x);
  },
  cosine(x: number) {
    return Math.cos(x);
  },
  log(x: number) {
    return Math.log(x);
  },
  log10(x: number) {
    return Math.log10(x);
  },
  ln(x: number) {
    return Math.log(x);
  },
  squareroot(x: number) {
    return Math.sqrt(x);
  },
  infinite() {
    return Infinity;
  },
  arcsine(x: number) {
    return Math.asin(x);
  },
  arccosine(x: number) {
    return Math.acos(x);
  },
  arctan(x: number) {
    return Math.atan(x);
  },
  isEqualTo(a: number, b: number) {
    return a === b;
  },
  isNotEqualTo(a: number, b: number) {
    return a !== b;
  },
  isGreaterThan(a: number, b: number) {
    return a > b;
  },
  isLessThan(a: number, b: number) {
    return a < b;
  },
  powerOf10(x: number) {
    return 10 ** x;
  },
  exp(x: number) {
    return Math.exp(x);
  },
  powerOf2(x: number) {
    return x ** 2;
  },
  float(a: number, b: number) {
    return Number(a + "." + b);
  },
  factorial(x: number) {
    if (x < 0 || !Number.isInteger(x)) { return NaN; }
    let start = 1;
    for (let i = 2; i <= x; i++) { start *= i }
    return start;
  },
  fraction(a: number, b: number) {
    return a + "⁄" + b;
  },
  floor(x: number) {
    return Math.floor(x);
  },
  returnUnicode() {
    return {
      "add": "+",
      "sub": "-",
      "mul": ["·", "×"],
      "div": "÷",
      "square": "²",
      "split": ["|", "÷2", "θ"],
      "circle": "⊙",
      "triangle": "∆",
      "pi": "π",
      "powerOf": ["^", ["¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]],
      "sine": "∿",
      "radian": "r",
      "degree": "°",
      "tan": null,
      "cosine": null,
      "log": null,
      "log10": "₁₀",
      "ln": null,
      "squareroot": "√",
      "infinite": "∞",
      "arcs": {
        "sine": "∿⁻¹",
        "cosine": null,
        "tan": null,
        "forall": "⁻¹"
      },
      "operators": {
        "isEqualTo": "===",
        "isNotEqualTo": "!==",
        
        "isGreaterThan": ">",
        "isLessThan": "<"
      },
      "powerOf10": "^¹⁰",
      "exp": "eˣ",
      "powerOf2": "^²",
      "float": ".",
      "factorial": "!",
      "fraction": "⁄",
      "floor": "⌊⌋",
      "returnUnicode": null
    }
  }
};

export { math };

const math = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
  square(x) {
    return x * x;
  },
  split(x, canHaveFloat) {
    if (canHaveFloat) {
      return x / 2;
    } else {
      return Math.floor(x / 2);
    }
  },
  circle(x) {
    return Math.PI * x * x;
  },
  triangle(base, height) {
    return 0.5 * base * height;
  },
  pi() {
    return Math.PI;
  },
  powerOf(a, b) {
    return a ** b;
  },
  sine(x) {
    return Math.sin(x);
  },
  radian(deg) {
    return deg * Math.PI / 180;
  },
  degree(rad) {
    return rad * 180 / Math.PI;
  },
  tan(x) {
    return Math.tan(x);
  },
  cosine(x) {
    return Math.cos(x);
  },
  log(x) {
    return Math.log(x);
  },
  log10(x) {
    return Math.log10(x);
  },
  ln(x) {
    return Math.log(x);
  },
  squareroot(x) {
    return Math.sqrt(x);
  },
  infinite() {
    return Infinity;
  },
  arcsine(x) {
    return Math.asin(x);
  },
  arccosine(x) {
    return Math.acos(x);
  },
  arctan(x) {
    return Math.atan(x);
  },
  isEqualTo(a, b) {
    return a === b;
  },
  isNotEqualTo(a, b) {
    return a !== b;
  },
  isGreaterThan(a, b) {
    return a > b;
  },
  isLessThan(a, b) {
    return a < b;
  },
  powerOf10(x) {
    return 10 ** x;
  },
  exp(x) {
    return Math.exp(x);
  },
  powerOf2(x) {
    return x ** 2;
  },
  float(a, b) {
    return Number(a + "." + b);
  },
  factorial(x) {
    if (x < 0 || !Number.isInteger(x)) { return NaN; }
    let start = 1;
    for (let i = 2; i <= x; i++) { start *= i }
    return start;
  },
  fraction(a, b) {
    return a + "⁄" + b;
  },
  floor(x) {
    return Math.floor(x);
  },
  percent(x) {
    return x / 100;
  },
  abs(x) {
    return Math.abs(x);
  },
  sum(a, b) {
    let result = 0;
    if (typeof c !== "undefined") {
      console.warn("Sorry this is not an JS error this is from the math module im just saying that an existing variable called 'c' already exists so because of this i cannot replace it :(");
      return;
    }

    for (let i = a; i <= b; i++) {
      result += i;
    }
    c = result;
    return c;
  },
  negative(x) {
    return -x
  },
  vector(a, b, c, env) {
    switch (env) {
      case "2d":
        return {
          "x": a,
          "y": b
        };
      case "3d":
        return {
          "x": a,
          "y": b,
          "z": c
        };
      default:
        console.warn("Sorry this is not an JS error this is from the math module im just saying that there's not a valid vector called " + env + " so please enter 2d or 3d thank you :DDD");
    }
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
      "percent": "%",
      "abs": "||",
      "sum": "∑",
      "negative": "-",
      "vector": "𝐯",
      "returnUnicode": null
    };
  }
};

export { math };

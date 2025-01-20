const add = (a, b) => a + b;

const calculate = (callback, d, a, b) => {
  setTimeout(() => {
    const result = callback(a, b);
    console.log("計算結果:", result, new Date());
    console.log("end", new Date());
  }, d);
};

console.log("start", new Date());

calculate(add, 2000, 5, 7);

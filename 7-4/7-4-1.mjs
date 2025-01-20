console.log("start", new Date());

const outputStarAndDiamond = (callback, a) => {
  setTimeout(() => {
    callback();
  }, a);
};

outputStarAndDiamond(() => {
  console.log("★", new Date());
}, 10000);

outputStarAndDiamond(() => {
  console.log("◆", new Date());
}, 20000);

console.log("end", new Date());

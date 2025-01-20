console.log("start", new Date());

const outputStarAndDiamond = (callback, a) => {
  setTimeout(() => {
    callback();
  }, a);
};

outputStarAndDiamond(() => {
  console.log("★", new Date());
}, 2000);

outputStarAndDiamond(() => {
  console.log("◆", new Date());
  outputStarAndDiamond(() => {
    console.log("end", new Date());
  }, 2000);
}, 3000);

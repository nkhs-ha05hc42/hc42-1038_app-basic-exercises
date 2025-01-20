console.log("start", new Date());

const outputStarAndDiamond = (callback, a) => {
  setTimeout(() => {
    callback();
  }, a);
};

outputStarAndDiamond(() => {
  console.log("★", new Date());
  outputStarAndDiamond(() => {
    console.log("◆", new Date());
  }, 3000);
  outputStarAndDiamond(() => {
    console.log("end", new Date());
  }, 5000);
}, 2000);

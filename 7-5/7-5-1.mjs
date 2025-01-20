const outputStar = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("★", new Date());
        resolve();
      }, 10000);
    });
  };
  
  const outputHeart = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("◆", new Date());
        resolve();
      }, 20000);
    });
  };
  
  console.log("start", new Date());
  
  outputStar()
    .then(() => outputHeart())
    .then(() => {
      console.log("end", new Date());
    });
  
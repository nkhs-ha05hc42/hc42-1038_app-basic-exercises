const outputStar = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("★", new Date());
        resolve();
      }, 2000);
    });
  };
  
  const outputHeart = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("◆", new Date());
        resolve();
      }, 3000);
    });
  };
  
  const outputEnd = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("end", new Date());
        resolve();
      }, 5000);
    });
  };
  
  console.log("start", new Date());
  
  outputStar()
    .then(() => {
      return Promise.all([outputHeart(), outputEnd()]);
    });
  
const func1 = () => {
    return new Promise((resolve) => {
      resolve("Test1");
    });
  };
  
  const func2 = (str) => {
    return new Promise((resolve) => {
      resolve(`New${str}`);
    });
  };
  
  console.log("start", new Date());
  
  func1()
    .then((result1) => {
      console.log("func1 result:", result1, new Date());
      return func2(result1);
    })
    .then((result2) => {
      console.log("func2 result:", result2, new Date());
      console.log("end", new Date());
    });
  
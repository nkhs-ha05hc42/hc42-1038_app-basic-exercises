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
  
  const ex = async () => {

      const result1 = await func1();
      console.log("func1 result:", result1);
  
      const result2 = await func2(result1);
      console.log("func2 result:", result2);
  };
  
  ex();
  
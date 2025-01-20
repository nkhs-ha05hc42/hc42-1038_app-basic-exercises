const addArray = (a, b) => {
    a.push(b);
    return a;
  };
  
  const ar = ["A", "B"];
  
  const C = addArray(ar, "C");
  
  console.log(C);
  
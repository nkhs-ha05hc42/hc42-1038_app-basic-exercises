const A = (value) => {
    console.log(value);
    if (value < 100) {
       A(value * 2);
    }
  };

  A(10);
  A(25);
  
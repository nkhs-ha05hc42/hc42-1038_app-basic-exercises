const getQ8_1_1 = (req, res) => {
    const { code } = req.query;
    res.send({
      code: code,
      name: "情報太郎", 
    });
  };

  const postQ8_1_2 = (req, res) => {
    const { code, postcode, address } = req.body;
    res.send({
      status: "OK",
      postcode: postcode,
    });
    console.log({
      code,
      postcode,
      address,
    });
  };

  const putQ8_1_3 = (req, res) => {
    const { code, postcode, address } = req.body;
  
    console.log({
      code,     
      postcode, 
      address,  
    });
    res.send({
      status: "OK",
      postcode: postcode,
    });
  };

  const deleteQ8_1_4 = (req, res) => {
    const { code } = req.query;
  
    res.send({
      status: "OK",
      code: code,  
    });
  };
  

  
  export const q8_1Controller = {
    getQ8_1_1,
    postQ8_1_2,
    putQ8_1_3,
    deleteQ8_1_4,
  };
  
const getQ8_1 = (req, res) => {
    const { code } = req.query;
    res.send({
      code: code,
      name: "情報太郎", 
    });
  };

  const postQ8_2 = (req, res) => {
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

  const putQ8_3 = (req, res) => {
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

  const deleteQ8_4 = (req, res) => {
    const { code } = req.query;
  
    res.send({
      status: "OK",
      code: code,  
    });
  };
  

  
  export const q8_1Controller = {
    getQ8_1,
    postQ8_2,
    putQ8_3,
    deleteQ8_4,
  };
  
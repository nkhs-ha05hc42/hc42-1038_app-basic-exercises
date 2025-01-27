const getQ8_1 = (req, res) => {
    const { code } = req.query;
    res.send({
      code: code,
      name: "情報太郎", 
    });
  };
  
  export const q8_1Controller = {
    getQ8_1,
  };
  
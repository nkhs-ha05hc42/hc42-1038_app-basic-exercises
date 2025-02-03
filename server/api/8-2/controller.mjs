const getQ8_1 = (req, res) => {
    const { code } = req.query;
  
    const data = {
      "HC42-9821": "情報太郎",
      "HC42-9822": "情報花子",
    };
  
    if (data[code]) {
      res.send({
        code: code,
        name: data[code], 
      });
    } else {
      res.send({
        status: "error",
        code: code,
        cause: "not found code!",
      });
    }
  };
  
  export const q8_2Controller = {
    getQ8_1,
  };
  
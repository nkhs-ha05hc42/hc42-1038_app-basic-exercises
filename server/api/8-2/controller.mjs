const getQ8_2_1 = (req, res) => {
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
  
  const postQ8_2_2 = (req, res) => {
    const { code, postcode, address } = req.body;
  
    const existingCodes = ["HC42-9821"];
  
    if (existingCodes.includes(code)) {
      return res.send({
        status: "error",
        code: code,
        cause: "code already exists!"
      });
    }
  
    console.log({
      code: code,
      postcode: postcode,
      address: address
    });
  
    res.send({
      status: "OK",
      postcode: postcode
    });
  };

  const putQ8_2_3 = (req, res) => {
    const { code, postcode, address } = req.body;
  
    const existingData = {
      "HC42-9823": {
        postcode: "059-0011",
        address: "北海道登別市"
      }
    };
  
    if (!existingData[code]) {
      return res.send({
        status: "error",
        code: code,
        cause: "not found code!"
      });
    }
  

    const updates = {};
  
    if (existingData[code].postcode !== postcode) {
      updates.postcode = postcode;
      console.log("postcode", postcode);
    }
  
    if (existingData[code].address !== address) {
      updates.address = address;
      console.log("address", address);
    }
  
    if (Object.keys(updates).length > 0) {
      res.send({
        status: "OK",
        code: code
      });
    } else {
    
      res.send({
        status: "OK",
        code: code
      });
      console.log({ code: code });
    }
  };

  const deleteQ8_2_4 = (req, res) => {
    const { code } = req.query;
  
    const validCodes = ["HC42-9824"];
  
    if (!validCodes.includes(code)) {
      return res.send({
        status: "error",
        code: code,
        cause: "not found code!",
      });
    }
  
    res.send({
      status: "OK",
      code: code,
    });
  };
  
  

  export const q8_2Controller = {
    getQ8_2_1,
    postQ8_2_2,
    putQ8_2_3,
    deleteQ8_2_4
  };
  
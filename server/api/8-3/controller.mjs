const getQ8_3_1 = (req, res) => {

    const fruits = [
      { en: "apple", ja: "りんご" },
      { en: "lemon", ja: "レモン" },
      { en: "grape", ja: "ぶどう" }
    ];
  
    res.send(fruits);
  };

  
const getQ8_3_2 = (req, res) => {
    
    const { fruit } = req.params;
  
    const data = {
      apple: "りんご",
      lemon: "レモン",
      grape: "ぶどう",
    };
  
  
    if (data[fruit]) {
      res.send({
        en: fruit,
        ja: data[fruit], 
      });
    } else {
      res.send({
        status: "error",
        en: fruit,
        cause: "not found!",
      });
    }
  };
  
  
  
  export const q8_3Controller = {
    getQ8_3_1,
    getQ8_3_2
  };
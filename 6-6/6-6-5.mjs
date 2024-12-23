const objectArray6_5_5 =[
    { key: "A", value: "カレー" },
    { key: "B", value: "定食" },
    { key: "C", value: "ラーメン" },
  ];
  
  const map6_6_5 = new Map(objectArray6_5_5.map(o => [o.key, o.value]));
  
 for (const [key, value] of map6_6_5){
    console.log(`Key: ${key}, Value: ${value}`);
  }
  
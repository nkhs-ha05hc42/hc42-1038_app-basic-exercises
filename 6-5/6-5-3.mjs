let  a = 0;
let count = 0;

for (let i = 1; i <= 100; i++){
  if (i % 2 === 0){
    a += i;
    count++;
  }
  
  if (a > 50){
    console.log(`ループ回数: ${count}, 合計: ${a}`);
    break;
  }
}

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const asynctask = async () => {
  console.log("start", new Date());

  await wait(10000);
  console.log("★", new Date());

  await wait(10000);
  console.log("◆", new Date());
};

console.log("start", new Date());
asynctask();
console.log("end", new Date());

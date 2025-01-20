const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const asynctask = async () => {
  console.log("start", new Date());

  await wait(2000);
  console.log("★", new Date());

  await wait(1000);
  console.log("◆", new Date());

  await wait(2000);
  console.log("end", new Date());
};

console.log("start", new Date());
asynctask();

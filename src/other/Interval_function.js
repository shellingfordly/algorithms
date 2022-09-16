// 实现一个函数, 可以间隔输出

function createRepeat(fn, repeat, interval) {
  return (...args) => {
    setInterval(() => {
      for (let i = 0; i < repeat; i++) {
        fn(...args);
      }
    }, interval * 1000);
  };
}

const fn = createRepeat(console.log, 3, 4);

fn("helloWorld"); // 每4秒输出一次helloWorld, 输出3次

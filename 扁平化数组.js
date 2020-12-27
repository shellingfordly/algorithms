// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
// const arr1 = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const arr = Array.from({ length: 10000 }).fill(1).map((_, i) => {
  if (Math.random() > 0.5) {
    const list = []
    for (let index = 0; index < Math.random() * 20; index++) {
      list.push(parseInt(Math.random() * 100))
    }
    return list
  } else {
    if (i % 5 === 0) {
      const list = []
      for (let index = 0; index < Math.random() * 100; index++) {
        list.push(getArr())
      }
      return list
    }
    return parseInt(Math.random() * 100)
  }
})

function getArr() {
  const list = []
  for (let index = 0; index < Math.random() * 100; index++) {
    list.push(parseInt(Math.random() * 100))
  }
  return list
}


function fn(arr) {
  let list = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'object' && item.length) {
      list = list.concat(fn(item))
    }
    else list.push(item)
  }
  list = [...new Set(list)].sort((a, b) => a - b)
  return list
}

function fn1(arr) {
  return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
}


function fn2(arr) {
  var arrL = JSON.stringify(arr).replace(/]/g, '').replace(/\[/g, '').split(',')
  var arrR = Array.from(new Set(arrL)).sort(function (a, b) {
    return a - b
  })
  return arrR
}


function fn3(arr) {
  const list = JSON.stringify(arr).replace(/\[|\]/g, '').split(',')
  const object = {}
  list.forEach(v=>object[v]=v)
  const res = []
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      res.push(Number(key))
    }
  }
  return res
}




console.time('ly')
fn(arr)
console.timeEnd('ly')

console.time('zxd')
fn2(arr)
console.timeEnd('zxd')

console.time('x')
fn1(arr)
console.timeEnd('x')

console.time('fn3')
fn3(arr1)
console.timeEnd('fn3')


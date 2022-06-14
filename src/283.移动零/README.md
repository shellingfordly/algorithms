## 移动零

> 题目： 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

示例 2:

```
输入: nums = [0]
输出: [0]
```

### 代码

1. 将所有 0 的下标记录下来，删除 0，补全 0

- 性能最差 264ms

```ts
export function moveZeroes(nums: number[]): void {
  let indexList: null | number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      indexList.push(i);
    }
  }
  indexList.reverse().forEach((index) => {
    nums.splice(index, 1);
  });

  Array(indexList.length)
    .fill(0)
    .forEach((_) => nums.push(0));
  indexList = null;
}
```

2. 将不为零的数字从 0 开始填，最后补全剩余的 0

```ts
export const moveZeroes1 = function (nums: number[]): void {
  let m = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[m] = nums[i];
      m++;
    }
  }

  nums.fill(0, m);
};
```

3. 用一个指针 j 指向非 0 的数字位置，遍历 nums，将非 0 数字从 j 为 0 开始依次填写，最后将剩余位置填 0，然后将 nums[j]和不为零的数交换位置

```ts
export var moveZeroes3 = function (nums: number[]) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
```

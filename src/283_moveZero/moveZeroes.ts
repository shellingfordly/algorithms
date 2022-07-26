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

// leetcode 用时最短答案 64 ms
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

export function moveZeroes2(nums: number[]): void {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num) {
      nums[index] = num;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
}

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

export function moveZeroes4(nums: number[]): void {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      index++;
    } else if (index > 0) {
      nums[i - index] = nums[i];
      nums[i] = 0;
    }
  }
}

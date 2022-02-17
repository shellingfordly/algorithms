// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

// 例如，
// [2,3,4] 的中位数是 3
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。

// 示例：
// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2

var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.nums.push(num);
  return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.nums.length;
  this.nums.sort((a, b) => a - b);
  if (len % 2 === 0) {
    return (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2;
  } else {
    return this.nums[Math.floor(len / 2)];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

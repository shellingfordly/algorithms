export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  function backtrack(con: number[], _nums: number[]) {
    if (_nums.length == 0) {
      res.push([...con]);
    } else {
      for (let i = 0; i < _nums.length; i++) {
        con.push(_nums[i]);
        backtrack(con, [..._nums.slice(0, i), ..._nums.slice(i + 1)]);
        con.pop();
      }
    }
  }
  if (nums.length) backtrack([], nums);
  return res;
}

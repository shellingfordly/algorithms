
export function rotate(matrix: number[][]): void {
  if (!matrix.length) return

  const copy: number[][] = [];

  const len = matrix.length

  for (let i = 0; i < len; i++) {
    copy[i] = [];
    for (let j = len - 1; j >= 0; j--) {
      copy[i][len - j - 1] = matrix[j][i]
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = copy[i][j]
    }
  }
};

export function rotate1(matrix: number[][]) {
  const n = matrix.length;
  // 先 水平翻转
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = temp;
    }
  }
  // 再 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}
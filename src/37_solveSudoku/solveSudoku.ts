export function solveSudoku(board: string[][]) {
  function isValidSudoku(
    row: number,
    col: number,
    val: string,
    board: string[][]
  ) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == val) return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][col] == val) return false;
    }

    let startRow = (row / 3) * 3;
    let startCol = (col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == val) return false;
      }
    }

    return true;
  }

  function solveSudokuHelper(board: string[][]) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] != ".") continue;

        for (let k = 1; k < 9; k++) {
          if (isValidSudoku(i, j, `${k}`, board)) {
            board[i][j] = `${k}`;
            if (solveSudokuHelper(board)) return true;
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
    return true;
  }

  solveSudokuHelper(board);
}

export function solveSudoku1(board: string[][]) {
  const line: boolean[][] = Array(9)
    .fill([])
    .map(() => Array(9).fill(false));
  const column: boolean[][] = Array(9)
    .fill([])
    .map(() => Array(9).fill(false));
  const block: boolean[][][] = Array(3)
    .fill([])
    .map(() =>
      Array(3)
        .fill([])
        .map(() => Array(9).fill(false))
    );
  const spaces: number[][] = [];
  let valid = false;

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] == ".") {
        spaces.push([i, j]);
      } else {
        let digit = Number(board[i][j]) - 1;
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            true;
      }
    }
  }

  dfs(board, 0);

  function dfs(board: string[][], pos: number) {
    if (pos == spaces.length) {
      valid = true;
      return;
    }

    const space = spaces[pos];
    let i = space[0],
      j = space[1];
    for (let digit = 0; digit < 9 && !valid; ++digit) {
      if (
        !line[i][digit] &&
        !column[j][digit] &&
        !block[Math.floor(i / 3)][Math.floor(j / 3)][digit]
      ) {
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            true;
        board[i][j] = String(digit + 1);
        dfs(board, pos + 1);
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            false;
      }
    }
  }
}

export function isValidSudoku(board: string[][]): boolean {
  let map: any = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == ".") continue;
      if (map[board[i][j]]) return false;
      else map[board[i][j]] = 1;
    }
    map = {};
  }

  map = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] == ".") continue;
      if (map[board[j][i]]) return false;
      else map[board[j][i]] = 1;
    }
    map = {};
  }

  map = {};

  for (let k = 0; k < 9; k += 3) {
    for (let f = 0; f < 9; f += 3) {
      for (let i = k; i < k + 3; i++) {
        for (let j = f; j < f + 3; j++) {
          if (board[i][j] == ".") continue;
          if (map[board[i][j]]) return false;
          else map[board[i][j]] = 1;
        }
      }
      map = {};
    }
  }

  return true;
}

export function isValidSudoku1(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const c = board[i][j];
      if (c == ".") continue;

      if (c != ".") {
        const index = c.charCodeAt(0) - "0".charCodeAt(0) - 1;
        rows[i][index]++;
        columns[j][index]++;
        boxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;

        if (
          rows[i][index] > 1 ||
          columns[j][index] > 1 ||
          boxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

export function isValidSudoku2(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const c = board[i][j];
      if (c == ".") continue;

      if (c != ".") {
        const index = c.charCodeAt(0) - "0".charCodeAt(0) - 1;
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        rows[i][index]++;
        columns[j][index]++;
        boxes[boxIndex][index]++;

        if (
          rows[i][index] > 1 ||
          columns[j][index] > 1 ||
          boxes[boxIndex][index] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

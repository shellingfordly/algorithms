/*
遍历grid数据，记录为1的坐标，同时hMap记录每一行为1的下标，以及1的个数；lMap记录每一列为1的下标，以及1的个数。

遍历所有为1的下标位置，获取此行为1的数量，此列为1的数量，排除当前位置的同行同列，将数量相乘即是三角形的数量
*/
export function numberOfRightTriangles1(grid: number[][]): number {
    const arr: [number, number][] = []
    const hMap: any = {}
    const lMap: any = {}

    for (let i = 0; i < grid.length; i++) {
        hMap[i] = { length: 0 }
        for (let j = 0; j < grid[i].length; j++) {
            if (!lMap[j]) lMap[j] = { length: 0 }
            if (grid[i][j] == 1) {
                hMap[i][j] = true
                hMap[i].length++
                lMap[j][i] = true
                lMap[j].length++
                arr.push([i, j])
            }
        }
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const h = arr[i][0]
        const l = arr[i][1]
        let hl = hMap[h].length
        let ll = lMap[l].length
        if (hMap[h][l]) hl--
        if (lMap[l][h]) ll--
        count += hl * ll
    }
    return count
};

/*

直接枚举三个点判断是否为直角三角形的方法未免过于低效，我们可以固定一个点，然后来统计其他两个点的合法方法数。

考虑枚举两条直角边的交点，然后将「该点所在行的其他点」与「该点所在列的其他点」一一匹配，即可得到所有以该点为直角边交点的所有方案。
设 row 为交点所在行 1 的个数，col 为交点所在列 1 的个数，那么它的贡献是 (row−1)×(col−1)，将所有交点的贡献加起来就是答案。

[
[0,1,0],
[0,1,1],
[0,1,0]
]
*/

export function numberOfRightTriangles(grid: number[][]): number {
    const n = grid.length;
    const m = grid[0].length;
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            row[i] += grid[i][j];
            col[j] += grid[i][j];
        }
    }

    console.log("col", col)
    /*
            [
                [0,1,0],
                [0,1,1],
                [0,1,0]
            ]

            row = [1,2,1]
            col = [0,3,1]

            grid[0][1] == 1
            row[0] == 1
            col[1] == 3
            count =1-1 * 3-1 =0
            
            grid[1][1] == 1
            row[1] == 2
            col[1] == 3
            count =2-1 * 3-1 =2

    */
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                res += (row[i] - 1) * (col[j] - 1);
            }
        }
    }

    return res;
};

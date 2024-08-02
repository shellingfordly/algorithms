/*
遍历grid数据，记录为1的坐标，同时hMap记录每一行为1的下标，以及1的个数；lMap记录每一列为1的下标，以及1的个数。

遍历所有为1的下标位置，获取此行为1的数量，此列为1的数量，排除当前位置的同行同列，将数量相乘即是三角形的数量
*/
export function numberOfRightTriangles(grid: number[][]): number {
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
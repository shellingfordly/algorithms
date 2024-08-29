export function visiblePoints(points: number[][], angle: number, location: number[]): number {
    // 所有点的极角
    const degree: number[] = []
    const [locationX, locationY] = location
    let count = 0

    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i]
        // 位于人物坐标处哪个角度都能看到
        if (x == locationX && y == locationY) {
            count++
            continue
        }
        //计算极角
        degree.push(Math.atan2(y - locationY, x - locationX))
    }
    degree.sort((a, b) => a - b)

    const m = degree.length;
    for (let i = 0; i < m; i++) {
        degree.push(degree[i] + 2 * Math.PI)
    }

    let right = 0
    let res = 0
    for (let i = 0; i < m; i++) {
        const curr = degree[i] + angle * Math.PI / 180
        while (right < degree.length && degree[right] <= curr) right++
        res = Math.max(res, right - i)
    }

    return res + count
}
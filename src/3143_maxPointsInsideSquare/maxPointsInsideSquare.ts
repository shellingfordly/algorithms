export function maxPointsInsideSquare(points: number[][], s: string): number {
    const pointsMap: Record<number, string[]> = {};

    for (let i = 0; i < points.length; i++) {
        let max = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));

        if (pointsMap[max]) {
            pointsMap[max].push(s[i]);
        } else {
            pointsMap[max] = [s[i]];
        }
    }

    const hash: Record<string, number> = {}
    let sum = 0;
    
    for (const key in pointsMap) {
        const l = pointsMap[key];
        let count = 0;
        let isBreak = false;
        for (const str of l) {
            if (!hash[str]) {
                hash[str] = 1;
                count++;
            } else {
                isBreak = true;
                break;
            }
        }

        if (isBreak) {
            break;
        }
        sum += count;
    }

    return sum;
};
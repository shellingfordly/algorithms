export function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    if (minutes == customers.length) return customers.reduce((p, n) => p + n, 0);

    let count = 0;
    let sum = 0;
    let res = 0;

    for (let i = 0; i < minutes; i++) {
        if (!grumpy[i]) res += customers[i];

        if (grumpy[i]) count += customers[i];
    }
    
    sum = count;

    for (let i = minutes, j = 0; i < customers.length; i++, j++) {
        if (!grumpy[i]) res += customers[i];
        if (grumpy[i]) count += customers[i];
        if (grumpy[j]) count -= customers[j];
        sum = Math.max(sum, count)
    }

    return res + sum;
};
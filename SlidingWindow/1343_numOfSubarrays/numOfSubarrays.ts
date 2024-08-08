export function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum / k >= threshold) count++;

    for (let i = 0, j = k; j < arr.length; i++, j++) {
        sum -= arr[i];
        sum += arr[j];
        if (sum / k >= threshold) count++;
    }
    return count;
};
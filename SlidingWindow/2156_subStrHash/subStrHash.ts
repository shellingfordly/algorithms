// 错误
export function subStrHash1(s: string, power: number, modulo: number, k: number, hashValue: number): string {
    for (let i = 0; i < s.length - k + 1; i++) {
        let sum = 0
        let j = i
        for (; j < i + k; j++) {
            sum += ((s[j].charCodeAt(0) & 31) * Math.pow(power, j - i)) % modulo
        }
        if (sum % modulo == hashValue) return s.slice(i, i + k)
    }
    return ""
}

// 错误
export function subStrHash2(s: string, power: number, modulo: number, k: number, hashValue: number): string {
    const hash = (s: string) => {
        let sum = 0
        for (let i = 0; i < s.length; i++) {
            sum += ((s[i].charCodeAt(0) & 31) % modulo * Math.pow(power, i) % modulo) % modulo
        }
        return sum % modulo == hashValue
    }

    let str = s.slice(0, k);
    if (hash(str)) return str

    for (let i = 1; i <= s.length - k; i++) {
        str = s.slice(i, i + k)
        if (hash(str)) {
            return str
        }
    }
    return ""
};

export function subStrHash(s: string, p: number, modulo: number, k: number, hashValue: number): string {
    let power = BigInt(p);
    let m = BigInt(modulo);
    let h = BigInt(hashValue);
    const n = s.length;

    // 用秦九韶算法计算 s[n-k:] 的哈希值，同时计算 pk=power^k
    let hash = 0n, pk = 1n;
    for (let i = n - 1; i >= n - k; i--) {
        hash = (hash * power + BigInt(s.charCodeAt(i) & 31)) % m;
        pk = (pk * power) % m;
    }
    let ans = hash === h ? n - k : 0;

    // 向左滑窗
    for (let i = n - k - 1; i >= 0; i--) {
        // 计算新的哈希值，注意 +m 防止计算出负数
        hash = (hash * power + BigInt(s.charCodeAt(i) & 31) - pk * BigInt(s.charCodeAt(i + k) & 31) % m + m) % m;
        if (hash === h) ans = i;
    }
    return s.substring(ans, ans + k);
};
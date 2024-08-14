export function countCompleteSubstrings(word: string, k: number): number {
    const is = (arr: number[]) => {
        for (let i = 0; i < 26; i++) {
            if (arr[i] > 0 && arr[i] != k)
                return false
        }
        return true
    }
    const index = (s: string) => s.charCodeAt(0) - 'a'.charCodeAt(0)
    const fn = (s: string, k: number) => {
        let res = 0
        for (let i = 1; i <= 26; i++) {
            let size = i * k
            if (size > s.length) break

            const arr = Array(26).fill(0)
            for (let i = 0; i < size; i++) {
                arr[index(s[i])]++
            }

            if (is(arr)) {
                res++
            }
            for (let i = size, j = 0; i < s.length; i++, j++) {
                arr[index(s[i])]++
                arr[index(s[j])]--
                if (is(arr)) res++
            }
        }
        return res
    }

    let count = 0
    for (let i = 0; i < word.length;) {
        let start = i
        for (i++; i < word.length && Math.abs(word[i].charCodeAt(0) - word[i - 1].charCodeAt(0)) <= 2; i++);
        const str = word.substring(start, i)
        if (str.length >= k) count += fn(str, k)
    }
    return count
};


export function countCompleteSubstrings1(word: string, k: number): number {
    const is = (arr: number[]) => {
        for (let i = 0; i < 26; i++) { if (arr[i] > 0 && arr[i] != k) return false }
        return true
    }
    const index = (s: string) => s.charCodeAt(0) - 'a'.charCodeAt(0)
    const fn = (s: string, k: number) => {
        let res = 0
        for (let i = 1; i <= 26; i++) {
            let size = i * k
            if (size > s.length) break

            const arr = Array(26).fill(0)

            for (let i = 0; i < size; i++) arr[index(s[i])]++
            if (is(arr)) res++
            
            for (let i = size, j = 0; i < s.length; i++, j++) {
                arr[index(s[i])]++
                arr[index(s[j])]--
                if (is(arr)) res++
            }
        }
        return res
    }

    let count = 0
    for (let i = 0; i < word.length;) {
        let start = i
        for (i++; i < word.length && Math.abs(word[i].charCodeAt(0) - word[i - 1].charCodeAt(0)) <= 2; i++);
        const str = word.substring(start, i)
        if (str.length >= k) count += fn(str, k)
    }
    return count
};
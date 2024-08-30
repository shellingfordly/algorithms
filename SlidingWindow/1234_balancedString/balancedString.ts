export function balancedString(s: string): number {
    const k = Math.floor(s.length / 4)
    const map: Record<string, number> = { Q: 0, W: 0, E: 0, R: 0 }

    for (let i = 0; i < s.length; i++) map[s[i]]++

    if (map.Q == k && map.W == k && map.E == k && map.R == k) return 0

    let res = Infinity
    let left = 0

    for (let right = 0; right < s.length; right++) {
        map[s[right]]--

        while (map.Q <= k && map.W <= k && map.E <= k && map.R <= k) {
            res = Math.min(res, right - left + 1)

            map[s[left]]++
            left++
        }
    }

    return res === Infinity ? 0 : res
};
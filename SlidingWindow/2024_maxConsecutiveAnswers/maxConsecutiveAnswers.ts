export function maxConsecutiveAnswers(answerKey: string, k: number): number {
    function max(str: string) {
        let left = 0, res = 0, sum = 0
        for (let i = 0; i < answerKey.length; i++) {
            if (answerKey[i] != str) sum++
            while (sum > k) {
                if (answerKey[left] != str) sum--
                left++
            }
            res = Math.max(res, i - left + 1)
        }
        return res
    }
    return Math.max(max("T"), max("F"))
};
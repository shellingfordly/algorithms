/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

import { timeStamp } from "console"

// @lc code=start
class MinStack {
    stack: number[]
    
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        // this.stack.push(x)
        this.stack[this.stack.length] = x
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length-1]
    }

    getMin(): number {
        let min = this.stack[0]
        this.stack.forEach(v=>{
            if(min>v) min = v
        })
        return min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


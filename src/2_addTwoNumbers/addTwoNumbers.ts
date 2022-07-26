/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  const result = new ListNode(0, null);
  let move = result;
  let flag = false;

  while (l1 || l2) {
    sum = (l1?.val ?? 0) + (l2?.val ?? 0) + Number(flag);
    if (sum >= 10) {
      move.val = sum % 10;
      flag = true;
    } else {
      move.val = sum;
      flag = false;
    }
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    if (l1 || l2 || flag) {
      move = move.next = new ListNode(Number(flag), null);
    }
  }

  return result;
}

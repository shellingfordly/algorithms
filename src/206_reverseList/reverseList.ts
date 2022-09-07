export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList1(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList1(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

export function reverseList2(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

export function reverseList3(head: ListNode | null): ListNode | null {
  let res = null;
  for (let i = head; i !== null; i = i.next) {
    res = new ListNode(i.val, res);
  }
  return res;
}

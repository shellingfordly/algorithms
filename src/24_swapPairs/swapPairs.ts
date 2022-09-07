export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let lastNode: ListNode | null = head;
  let index: ListNode | null = head?.next;
  let temp: ListNode | null = null;
  let result = head?.next;

  while (index) {
    temp = index?.next;
    index.next = lastNode;
    lastNode!.next = index = temp?.next || temp;
    lastNode = temp;
  }

  return result;
}

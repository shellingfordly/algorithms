export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const removeNthFromEnd = function (head: ListNode | null, n: number) {
  let first: ListNode | null = head;
  let second: ListNode | null = head;
  while (n >= 0) {
    if (first) first = first.next;
    else return head?.next;
    n--;
  }
  while (first) {
    first = first.next;
    second = second!.next;
  }
  second!.next = second!.next!.next;
  return head;
};

export function removeNthFromEnd2(head: ListNode | null, n: number) {
  const map: any = {};
  let i = 0;
  while (head) {
    map[i] = head;
    head = head.next!;
    i++;
  }
  if (i === n) map[0] = map[0].next;
  else if (i > n) map[i - n - 1].next = map[i - n].next;

  return map[0];
}

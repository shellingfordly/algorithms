export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (k == 1) return head;

  let his: ListNode[] = [];
  let arr = [];

  let p = head;

  while (p) {
    arr.push(p);
    p = p.next;
    if (arr.length === k) {
      his = his.concat(arr.reverse());
      arr = [];
    }
  }
  his = his.concat(arr);

  his.reduce((p, n) => {
    p.next = n;
    return n;
  });

  his[his.length - 1].next = null;

  return his[0];
}

export function reverseKGroup2(head: ListNode | null, k: number) {
  function reverse(h: ListNode | null) {
    let res = null;
    let last = null;
    for (let x: ListNode | null = h; x !== null; x = x.next) {
      res = new ListNode(x.val, res);
      if (!last) last = res;
    }
    return [res, last];
  }

  function reverseGroup(h: ListNode | null) {
    let p: ListNode | null = h;
    let count = 1;
    while (p) {
      p = p.next;
      if (p) count++;
      if (count == k) {
        const n = p!.next;
        p!.next = null;
        const [first, last] = reverse(h);
        last!.next = reverseGroup(n);
        return first;
      }
    }
    return h;
  }

  if (k == 1) return head;
  return reverseGroup(head);
}

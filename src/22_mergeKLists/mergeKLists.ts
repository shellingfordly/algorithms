export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let arr = [];

  for (let i = 0; i < lists.length; i++) {
    let item = lists[i];
    while (item) {
      arr.push(item.val);
      item = item.next;
    }
  }
  arr = arr.sort((a, b) => a - b);

  let result = new ListNode(-1, null);
  let flag = result;

  for (let i = 0; i < arr.length; i++) {
    flag.next = new ListNode(arr[i], null);
    flag = flag.next;
  }

  return result.next;
}

export function mergeKLists1(lists: Array<ListNode | null>): ListNode | null {
  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
  }

  function merge(
    lists: (ListNode | null)[],
    l: number,
    r: number
  ): ListNode | null {
    if (l == r) return lists[l];
    if (l > r) return null;
    const mid = (l + r) >> 1;
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
  }

  // function merge(list: ListNode | null, i: number): ListNode | null {
  //   if (i === lists.length) return list;
  //   const newList = mergeTwoLists(list, lists[i]);
  //   return merge(newList, i + 1);
  // }

  // if (lists.length === 0) return null;

  return merge(lists, 0, lists.length - 1);
}

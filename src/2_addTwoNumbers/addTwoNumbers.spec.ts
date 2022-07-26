import { ListNode, addTwoNumbers } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("one", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

    const res = addTwoNumbers(l1, l2);
    let hand = res;
    const arr = [7, 0, 8];
    arr.forEach((item) => {
      if (hand && hand.val) {
        expect(hand.val).toBe(item);
        hand = res?.next || null;
      }
    });
  });

  it("two", () => {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, null)));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, null)));

    const res = addTwoNumbers(l1, l2);
    let hand = res;

    let i = 0;
    const arr = [8, 9, 9, 1];

    while (hand) {
      expect(hand.val).toBe(arr[i]);
      i++;
      hand = hand.next;
    }
  });
});

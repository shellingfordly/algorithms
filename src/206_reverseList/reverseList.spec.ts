import {
  ListNode,
  reverseList1,
  reverseList2,
  reverseList3,
} from "./reverseList";

function createList(val: number[], i: number = 0) {
  if (!val.length) return null;
  const node = new ListNode(val[i], null);
  if (i < val.length - 1) {
    node.next = createList(val, i + 1);
  } else {
    node.next = null;
  }
  return node;
}

test("reverseKGroup1", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result2 = createList([5, 4, 3, 2, 1]);
  expect(reverseList1(head)).toEqual(expect.objectContaining(result2));
});

test("reverseKGroup2", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result2 = createList([5, 4, 3, 2, 1]);
  expect(reverseList2(head)).toEqual(expect.objectContaining(result2));
});

test("reverseKGroup3", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result2 = createList([5, 4, 3, 2, 1]);
  expect(reverseList3(head)).toEqual(expect.objectContaining(result2));
});

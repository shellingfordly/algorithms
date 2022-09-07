import { ListNode, reverseKGroup, reverseKGroup2 } from "./reverseKGroup";

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

test("reverseKGroup1-1", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result2 = createList([2, 1, 4, 3, 5]);
  expect(reverseKGroup(head, 1)).toEqual(expect.objectContaining(head));
  expect(reverseKGroup(head, 2)).toEqual(expect.objectContaining(result2));
});

test("reverseKGroup1-2", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result3 = createList([3, 2, 1, 4, 5]);
  expect(reverseKGroup(head, 3)).toEqual(expect.objectContaining(result3));
});

test("reverseKGroup2-1", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result2 = createList([2, 1, 4, 3, 5]);

  expect(reverseKGroup2(head, 1)).toEqual(expect.objectContaining(head));
  expect(reverseKGroup2(head, 2)).toEqual(expect.objectContaining(result2));
});

test("reverseKGroup2-2", () => {
  const head = createList([1, 2, 3, 4, 5]);
  const result3 = createList([3, 2, 1, 4, 5]);
  expect(reverseKGroup2(head, 3)).toEqual(expect.objectContaining(result3));
});

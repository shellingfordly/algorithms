import { ListNode, swapPairs } from "./swapPairs";

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

test("swapPairs 1", () => {
  const head = createList([1, 2, 3]);
  const res = createList([2, 1, 3]);

  expect(swapPairs(head)).toEqual(expect.objectContaining(res));
});

test("swapPairs 2", () => {
  const head = createList([1, 2, 3, 4]);
  const res = createList([2, 1, 4, 3]);

  expect(swapPairs(head)).toEqual(expect.objectContaining(res));
});

test("swapPairs 3", () => {
  expect(swapPairs(null)).toBe(null);
});

test("swapPairs 4", () => {
  const head = createList([1]);
  expect(swapPairs(head)).toEqual(head);
});

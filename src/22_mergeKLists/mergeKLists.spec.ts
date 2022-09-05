import { ListNode, mergeKLists, mergeKLists1 } from "./mergeKLists";

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

function createLists(list: number[][]) {
  const result: (ListNode | null)[] = [];
  for (let i = 0; i < list.length; i++) {
    const node = createList(list[i]);
    result.push(node);
  }
  return result;
}

test("暴力求解 case one", () => {
  const res = createLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ]);
  const _res = createList([1, 1, 2, 3, 4, 4, 5, 6]);

  expect(mergeKLists(res)).toEqual(expect.objectContaining(_res));
});

test("暴力求解 case one", () => {
  expect(mergeKLists([])).toEqual(null);
});

test("暴力求解 case three", () => {
  const res = createLists([[], [-1, 5, 11], [], [6, 10]]);
  const _res = createList([-1, 5, 6, 10, 11]);

  expect(mergeKLists(res)).toEqual(expect.objectContaining(_res));
});

test("分治 case one", () => {
  const res = createLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ]);
  const _res = createList([1, 1, 2, 3, 4, 4, 5, 6]);
  expect(mergeKLists1(res)).toEqual(expect.objectContaining(_res));
});

test("分治 case two", () => {
  expect(mergeKLists1([])).toEqual(null);
});

test("分治 case three", () => {
  const res = createLists([[], [-1, 5, 11], [], [6, 10]]);
  const _res = createList([-1, 5, 6, 10, 11]);

  expect(mergeKLists1(res)).toEqual(expect.objectContaining(_res));
});

test("分治 case two", () => {
  expect(mergeKLists1(createLists([[1]]))).toEqual(
    expect.objectContaining(createList([1]))
  );
});

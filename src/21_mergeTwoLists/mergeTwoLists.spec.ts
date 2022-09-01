import { ListNode, mergeTwoLists, mergeTwoLists1 } from "./mergeTwoLists";

function createNode(val: number[], i: number = 0) {
  const node = new ListNode(val[i], null);
  if (i < val.length - 1) {
    node.next = createNode(val, i + 1);
  } else {
    node.next = null;
  }
  return node;
}

test("mergeTwoLists", () => {
  expect(mergeTwoLists(createNode([2, 4]), createNode([1, 3]))).toEqual(
    expect.objectContaining(createNode([1, 2, 3, 4]))
  );

  expect(mergeTwoLists(null, createNode([1]))).toEqual(
    expect.objectContaining(createNode([1]))
  );
});

test("mergeTwoLists - 1", () => {
  expect(mergeTwoLists1(createNode([2, 4]), createNode([1, 3]))).toEqual(
    expect.objectContaining(createNode([1, 2, 3, 4]))
  );

  expect(mergeTwoLists1(null, createNode([1]))).toEqual(
    expect.objectContaining(createNode([1]))
  );
});

import {
  ListNode,
  removeNthFromEnd,
  removeNthFromEnd2,
} from "./removeNthFromEnd";

function createNode(val: number[], i: number = 0) {
  const node = new ListNode(val[i], null);
  if (i < val.length - 1) {
    node.next = createNode(val, i + 1);
  } else {
    node.next = null;
  }
  return node;
}

test("removeNthFromEnd", () => {
  let head = createNode([1, 2, 3]);
  expect(removeNthFromEnd(head, 3)).toEqual(
    expect.objectContaining({
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    })
  );
  expect(removeNthFromEnd(head, 1)).toEqual(
    expect.objectContaining({
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    })
  );
});

test("removeNthFromEnd2", () => {
  let head = createNode([1, 2, 3]);

  expect(removeNthFromEnd2(head, 3)).toEqual(
    expect.objectContaining({
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    })
  );
  expect(removeNthFromEnd2(head, 1)).toEqual(
    expect.objectContaining({
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    })
  );
});

import { searchRange, searchRange1, searchRange2 } from "./searchRange";

test("searchRange", () => {
  expect(searchRange([3, 4, 5, 8, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 5])
  );

  expect(searchRange([3, 4, 5, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 4])
  );

  expect(searchRange([3, 4, 5, 8, 8, 9], 6)).toEqual(
    expect.arrayContaining([-1, -1])
  );

  expect(searchRange([3, 4, 5, 8, 8, 9], 5)).toEqual(
    expect.arrayContaining([2, 2])
  );

  expect(searchRange([2, 2], 2)).toEqual(
    //
    expect.arrayContaining([0, 1])
  );
});

test("searchRange1", () => {
  expect(searchRange1([3, 4, 5, 8, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 5])
  );

  expect(searchRange1([3, 4, 5, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 4])
  );

  expect(searchRange1([3, 4, 5, 8, 8, 9], 6)).toEqual(
    expect.arrayContaining([-1, -1])
  );

  expect(searchRange1([3, 4, 5, 8, 8, 9], 5)).toEqual(
    expect.arrayContaining([2, 2])
  );

  expect(searchRange1([2, 2], 2)).toEqual(
    //
    expect.arrayContaining([0, 1])
  );
});

test.only("searchRange2", () => {
  expect(searchRange2([3, 4, 5, 8, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 5])
  );

  expect(searchRange2([3, 4, 5, 8, 8, 9], 8)).toEqual(
    expect.arrayContaining([3, 4])
  );

  const result = searchRange2([3, 4, 5, 8, 8, 9], 6);
  expect(result[0]).toBe(-1);
  expect(result[1]).toBe(-1);

  expect(searchRange2([3, 4, 5, 8, 8, 9], 5)).toEqual(
    expect.arrayContaining([2, 2])
  );

  expect(searchRange2([2, 2], 2)).toEqual(expect.arrayContaining([0, 1]));
});

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const list = [...nums1, ...nums2].sort();
  const mid = Math.floor(list.length / 2);

  return !(list.length % 2) ? (list[mid - 1] + list[mid]) / 2 : list[mid];
}

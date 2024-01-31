let arr = [1, [53, [54, 56]], { a: 71, b: 72, c: { d: 73, e: 86 } }, 7, 8];

let complexArrayExample = [
  1,
  [50, 51],
  2,
  [53, [54, 56]],
  3,
  { a: 61, b: 62 },
  { a: 71, b: 72, c: { d: 73, e: 86 } },
  4,
  5,
  6,
];

let a = [1, 2, 3, 4, 5];
a = [...a, 0];
a.push(7);
console.log(a);

// deep cloning
const arr1 = structuredClone(complexArrayExample);
arr1[0] = 1000;
arr1[1][0] = 2000;
arr1[5].a = 4000;
console.log(arr1);
console.log(complexArrayExample);

// it help to create deep copy for object and array
// input can be array or obj
function createDeepCopy(input) {
  if (typeof input !== "object") {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};
  for (key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }

  return copy;
}

let arr = [
  1,
  [45, 46],
  2,
  [3, 5, [7, 8, 9]],
  50,
  { fist: "Chandan", obj: { a: 10, b: 8 } },
  99,
  100,
];

let deepArray = createDeepCopy(arr);

deepArray[0] = 789;
deepArray[3][2][0] = 101;
deepArray[5].fist = "Aman";
deepArray[5].obj.a = 888;

console.log(arr);
console.log(deepArray);

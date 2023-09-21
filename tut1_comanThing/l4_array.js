// we can declare array by two way

// 1.with new keyword
let a = new Array(1, 2, 3);

a.forEach((value, index, arr) => {
  console.log(`${value} at ${index} form ${arr}`);
});

//2.with square bracket
let arr = [1, 2, 3];
console.log("\nBefore any operation in array -> ", arr);

// some operation in array

// insert at end
arr.push("endElement");
console.log("After pushing element in arrray -> ", arr);

// insert at front
arr.unshift("frontElement");
console.log("After unshift element in arrray -> ", arr);

// delete from end
arr.pop();
console.log("After pop element in arrray -> ", arr);

//delete from front
arr.shift();
console.log("After shift element in arrray -> ", arr);

//insert at some index
let myArray = [18, 9, 36, 24, 15];
console.log(
  "\nBefore adding or delete any element  at randome index -> ",
  myArray
);
myArray.splice(2, 0, 6); // Insert 6 at index 2
console.log("After adding element in arrray at index 2 -> ", myArray);
//delete frome some index
myArray.splice(4, 1); // Delete 1 element starting from index 4
console.log("After Delete element in arrray at index 4 -> ", myArray);

let arry = [45, 2, 79, 20, 49, 18];
console.log("\nBefore the sorting array -> ", arry);
// if we can not use lamada expression it sort lexographyical order
arry.sort();
console.log("lexography order -> ", arry);
// sort the array in increaseing order
arry.sort((a, b) => a - b);
console.log("After the sorting array in increasing order -> ", arry);
// sort the array in descending order
arry.sort((a, b) => b - a);
console.log("After the sorting array in descending order -> ", arry);

// how to clear the array all element from array
console.log("\nlength of arry is -> ", arry.length);
// now clear all element from Array
arry.length = 0;
console.log(arry, "\n");

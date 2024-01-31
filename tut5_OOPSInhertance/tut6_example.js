class A {
  area(x, y) {
    console.log(x * y);
  }
}
class B extends A {
  area(a, b) {
    super.area(a, b);
    console.log("Class B");
  }
}
let ob = new B();
let output = ob.area(100, 200);

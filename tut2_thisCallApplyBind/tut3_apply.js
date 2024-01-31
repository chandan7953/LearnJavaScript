// Syntax
// car.apply(obj,[arg1,arg2,...]);

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
  this.brand = brand;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1");

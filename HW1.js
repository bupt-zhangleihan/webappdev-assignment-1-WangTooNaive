class Product {
  constructor(id, name, model, price, quantity, discount) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
  }
}
const product1 = new Product(
  1,           //Number
  "Product 1", //String
  "A-1",       //String
  10.99,       //Number
  5,           //Number
  0.95         //Number
);

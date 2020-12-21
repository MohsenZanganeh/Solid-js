class order {
  constructor(radius) {
    this.radius 
  }

  calculateTotalSum(num1, num2) {
      return num1 + num2;
  }
  save(order) {
    return "Order: " + order;
  }
  update(id, order) {
    return "id: " + id + " Order: " + order;
  }
  delete(id) {
    return "id: " + id;
  }
  getAll(name = "", phon = "") {
    return "Name: " + name + " Phon: " + phon;
  }
  getOne(id) {
    return "id: " + id;
  }
}

module.exports = new order();

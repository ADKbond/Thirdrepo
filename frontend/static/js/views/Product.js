import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    console.log("product");
    this.setTitle("Product");
  }
  getHtml() {
    console.log("GET PRODUCT");
    var mainSection = document.querySelector(".card-container");
    var product = document.querySelector(".product-container");
    mainSection.style.display = "none";
    product.style.display = "flex";
  }
}

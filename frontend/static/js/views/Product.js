import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    console.log("product");
    this.setTitle("Product");
  }
  getHtml() {
    console.log("GET PRODUCT");
    var productImg = document.querySelector(".product-img-div");
    productImg.innerHTML =
      "<img class='product-img'src=" + localStorage.getItem("imageurl") + "/>";
    var mainSection = document.querySelector(".card-container");
    var product = document.querySelector(".product-container");
    mainSection.style.display = "none";
    product.style.display = "flex";
  }
}

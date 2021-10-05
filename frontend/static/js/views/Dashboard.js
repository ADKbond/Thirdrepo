import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    console.log("dash");
    this.setTitle("Dashboard");
  }
  getHtml() {
    // return `
    //     <h1>Welcome Back Dom</h1>
    //     <p>erhifbi ureqfbiu po irfioirfi iawrfib arf oiabfio basvbo va sfv aisvas vas vuasbvas vas vbayisvboas v</p>
    //     <a href="/product" data-link>Post Link</a>
    //     `;
    var mainSection = document.querySelector(".card-container");
    var product = document.querySelector(".product-container");
    mainSection.style.display = "flex";
    product.style.display = "none";
  }
}

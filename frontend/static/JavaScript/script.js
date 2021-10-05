//MAIN COMPONENT JS STARTS
var arr = [
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjV0BrUaZjhdAuOOe10j37VufyErnW46dXw&usqp=CAU",
  "https://thumbs.dreamstime.com/b/abstract-orange-painting-grey-wall-stylish-living-room-interior-white-wooden-furniture-couch-140315142.jpg",
  "https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg",
  "https://thumbs.dreamstime.com/b/framed-photo-white-wall-open-space-dining-room-kitchen-interior-modern-wooden-furniture-plants-framed-122712877.jpg",
];
var mainSection = document.querySelector(".card-container");
for (var i = 0; i < arr.length; i++) {
  mainSection.innerHTML +=
    "<div class='card-div'>" +
    "<div class='card'>" +
    "<img class='card-img'src='" +
    arr[i] +
    "'/>" +
    "<div class='card-name-div'>" +
    "<h3 class='card-name card-font-primary'>Name</h3>" +
    "</div>" +
    "<div class='card-subname-div'>" +
    "<h3 class='card-subname card-font-secondary'>SUBNAME</h3>" +
    "<h2 class='card-price'>$2900</h2>" +
    "</div>" +
    "<div class='card-icon-div'>" +
    "<div class='icon-rating-div'>" +
    "<a href='/' data-link class='card-icon card-rating-icon'>" +
    "<i class='material-icons'>star_rate</i>" +
    "</a>" +
    "<a href='' class='card-icon card-rating-icon'>" +
    "<i class='material-icons'>star_rate</i>" +
    "</a>" +
    "<a href='' class='card-icon card-rating-icon'>" +
    "<i class='material-icons'>star_rate</i>" +
    "</a>" +
    "<a href='' class='card-icon card-rating-icon'>" +
    "<i class='material-icons'>star_rate</i>" +
    "</a>" +
    "<a href='' class='card-icon card-rating-icon'>" +
    "<i class='material-icons-outlined'>star_rate</i>" +
    "</a>" +
    "</div>" +
    "<a href='/product' data-link class='card-icon card-shop-icon'>" +
    "<i class='material-icons-outlined'>add_shopping_cart</i>" +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>";
}
var product = document.querySelector(".product-container");
var productImg = document.querySelector(".product-img-div");
var bottomImg = document.querySelector(".product-img-container-bottom");

function openCard(e, index) {
  console.log("CRAD OPENEr");
  mainSection.style.display = "none";
  product.style.display = "flex";
  productImg.innerHTML = "<img class='product-img' src=" + arr[index] + "/>";
  bottomImg.innerHTML = "<img class='bottom-img' src=" + arr[index] + "/>";
}
var sidebar = document.querySelector(".sidebar-container");
var toggler = false;
function toggleSidebar(e) {
  toggler = !this.toggler;
  if (toggler === true) {
    sidebar.style.display = "flex";
    sidebar.style.flexBasis = "20%";
    mainSection.style.flexBasis = "80%";
  } else {
    sidebar.style.display = "none";
    mainSection.style.flexBasis = "100%";
  }
  console.log(toggler);
}
var toggleAccordian = false;
var prevClassText = "";
function openAccordian(e, classText) {
  if (prevClassText === "") {
    prevClassText = classText;
    toggleAccordian = true;
    document.querySelector("." + classText).style.display = "flex";
  } else if (prevClassText !== classText) {
    document.querySelector("." + prevClassText).style.display = "none";
    toggleAccordian = true;
    document.querySelector("." + classText).style.display = "flex";
  } else {
    toggleAccordian = !this.toggleAccordian;
    if (toggleAccordian === false)
      document.querySelector("." + classText).style.display = "none";
    else document.querySelector("." + classText).style.display = "flex";
  }
  prevClassText = classText;
}
//MAIN COMPONENT JS ENDS

//JS FOR FOOTER STARTS

var footer = document.querySelector(".footer-link-div");
for (var i = 1; i <= 10; i++) {
  footer.innerHTML +=
    "<button class='footer-link' id='footer-link-" +
    i +
    "'onClick='check(event," +
    i +
    ")'>" +
    i +
    "</button>";
}
var prevId = "#footer-link-1";
document.querySelector("#footer-link-1").style.background = "black";
document.querySelector("#footer-link-1").style.color = "white";
function check(ev, id) {
  console.log(id);
  document.querySelector(prevId).style.background = "";
  document.querySelector(prevId).style.color = "black";
  document.querySelector("#footer-link-" + id).style.background = "black";
  document.querySelector("#footer-link-" + id).style.color = "white";
  prevId = "#footer-link-" + id;
}

//JS FOR FOOTER ENDS

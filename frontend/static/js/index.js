import Dashboard from "./views/Dashboard.js";
import Product from "./views/Product.js";
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

console.log("JS IS LOADED");
const router = async () => {
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/product",
      view: Product,
    },
  ];
  //TEST EACH ROUTE
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  console.log(potentialMatches);
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
  }
  const view = new match.route.view();
  await view.getHtml();
};
window.addEventListener("popstate", router); //FOR NVIGATING BACKWARDS IN THE HISTORY STATE
document.addEventListener("DOMContentLoaded", () => {
  console.log("INSIDE DOM CONTENT LOADED");
  document.body.addEventListener("click", (e) => {
    console.log("INSIDE CLICK LISTENER", e.target);

    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      console.log("PRevent");
      navigateTo(e.target.href);
    }
  });
  router();
});

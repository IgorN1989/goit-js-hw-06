const categories = document.querySelector("ul#categories");

const numberOfCategories = categories.querySelectorAll("li.item").length;
console.log("Number of categories:", numberOfCategories);

const infoOfCategory = categories.querySelectorAll("li.item").forEach((item) => {
   console.log("Category:", item.querySelector("h2").textContent);
   console.log("Elements:", item.querySelectorAll("li").length);
});
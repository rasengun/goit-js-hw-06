const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);

const allCategoriesItems = listOfCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});

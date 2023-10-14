const tasc1 = {
  categories: document.querySelector("#categories"),
  items: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${tasc1.categories.childElementCount}`);

tasc1.items.forEach((e)=>{
    console.log(`Category: ${e.children[0].textContent}`);
    console.log(`Elements: ${e.children[1].childElementCount}`);
});

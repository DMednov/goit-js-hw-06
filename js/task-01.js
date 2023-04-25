const categoriesList = document.getElementById('categories');
const navLinkEl = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${navLinkEl.length}`);
navLinkEl.forEach(item => {
   console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.lastElementChild.children.length}`);
});


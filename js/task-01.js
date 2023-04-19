const categoriesList = document.getElementById('categories');
const navLinkEl = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${navLinkEl.length}`);
navLinkEl.forEach(item => {
    const elementName = item.querySelector('h2').textContent;
    
    const elementsTotal = item.querySelectorAll('li').length;
    console.log(`Category: ${elementName}`);
    console.log(`Elements: ${elementsTotal}`);
});
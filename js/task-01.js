const isCategories = document.querySelectorAll('.item');

console.log('Number of categories:', isCategories.length);


isCategories.forEach(element => {
  const categoryName = element.firstElementChild.textContent;
  const listElement = element.lastElementChild.children;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${listElement.length}`);
});
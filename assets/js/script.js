document.querySelectorAll('.category-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const category = icon.dataset.category.toLowerCase();
    searchInput.value = category;
    filterRestaurants(category);
  });
});
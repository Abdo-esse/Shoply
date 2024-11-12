
// hgghhghghghghhghg

var filtrage = document.getElementById("catégorie");
filtrage.addEventListener("change", filterByCategory);

// Function de filter par category
function filterByCategory(e) {
  if (e.target.value === "All" ) {
    allCategories(datas); 
  } else {
    const filteredProducts = datas.filter(product => product.catégorie === e.target.value);
    allCategories(filteredProducts); 
  }
}

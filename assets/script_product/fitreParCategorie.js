function filterParCategorie() {
     var tableauProducts = datas
     var products=tableauProducts.flat()
     console.log(products);
     return tableauProducts;
   }
   
   // Appeler la fonction de filtrage après le chargement des données
   setTimeout(() => {
    filterParCategorie(10, 50); // Filtrer les produits entre 10 et 50
    
   }, 1000);

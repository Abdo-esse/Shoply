function filterParCategorie() {
    var filterParCategorie = datas.filter((cat)=>{
     if (cat.cat) {
         
     }
    })
 
     console.log("Filtered products:", products);
   
     return products;
   }
   
   // Appeler la fonction de filtrage après le chargement des données
   setTimeout(() => {
     filterProducts(10, 50); // Filtrer les produits entre 10 et 50
    
   }, 1000);

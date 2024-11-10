function filterParCategorie() {
     var tableauProducts = datas
     console.log(tableauProducts);
     
     var products=tableauProducts.flat()
     console.log(products);
      var catégorieÉlectroniques= products.filter((produit,index)=>{
        if (produit.catégorie == 'Électroniques') {
          return produit
        }
      })
      console.log(catégorieÉlectroniques);
      
     return tableauProducts;
   }
   
  
   setTimeout(() => {
    filterParCategorie(10, 50); 
    
   }, 1000);

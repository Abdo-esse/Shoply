






function filterProduitÉlectroniques() {
    var products=datas.flat()
      var catégorieÉlectroniques= products.filter((produit,index)=>{
        if (produit.catégorie == 'Électroniques') {
          return produit
        }
      })
      console.log(catégorieÉlectroniques);
      
     return products;
   }
  
  
   setTimeout(() => {
    filterProduitÉlectroniques(); 
    
   }, 1000);






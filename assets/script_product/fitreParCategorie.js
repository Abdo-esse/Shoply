






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



function filterProduitMaison() {
    var products=datas.flat()
      var catégorieMaison= products.filter((produit,index)=>{
        if (produit.catégorie == 'Maison') {
          return produit
        }
      })
      console.log(catégorieMaison);
      
     return products;
   }
  
  
   setTimeout(() => {
    filterProduitMaison(); 
    
   }, 1000);






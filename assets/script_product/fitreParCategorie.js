




// la fonction de filtre priducte en categorie electronique

function filterProduitÉlectroniques() {
    var products=datas.flat()
      var catégorieÉlectroniques= products.filter((produit)=>{
        if (produit.catégorie == 'Électroniques') {
          return produit
        }
      })
      console.log(catégorieÉlectroniques);
      
     return products;
   }

    


// la fonction de filtre priducte en categorie maison
function filterProduitMaison() {
    var products=datas.flat()
      var catégorieMaison= products.filter((produit)=>{
        if (produit.catégorie == 'Maison') {
          return produit
        }
      })
      console.log(catégorieMaison);
      
     return products;
   }
  



  // la fonction de filtre priducte en categorie mode
function filterProduitMode() {
    var products=datas.flat()
      var catégorieMode= products.filter((produit)=>{
        if (produit.catégorie == 'Mode') {
          return produit
        }
      })
      console.log(catégorieMode);
      
     return products;
   }
  
  


   
   
   
function filterProduit() {
  var categoire = document.getElementById('catégorie');

  console.log(categoire.value);

  console.log("--------");

  if ( categoire.value === "Électroniques") {
        console.log("elctronique | nadi");

        setTimeout(() => {
          filterProduitÉlectroniques(); 
          
         }, 500);


      }

 else if (categoire.value === "Maison") {

    setTimeout(() => {
      filterProduitMaison(); 
      
     }, 1000);


      }

  else if (categoire.value === "Mode") {

    setTimeout(() => {
      filterProduitMode(); 
      
     }, 1000);


  }
  else{
    console.log('rak tm');
    
  }

  
  
}




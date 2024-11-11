




// la fonction de filtre priducte en categorie electronique

function filterProduitÉlectroniques() {
    
      var catégorieÉlectroniques= datas.filter((produit)=>{
        if (produit.catégorie == 'Électroniques') {
          return produit
        }
      })
      console.log(catégorieÉlectroniques);
      
     return datas;
   }

    


// la fonction de filtre priducte en categorie maison
function filterProduitMaison() {
    
      var catégorieMaison= datas.filter((produit)=>{
        if (produit.catégorie == 'Maison') {
          return produit
        }
      })
      console.log(catégorieMaison);
      
     return datas;
   }
  



  // la fonction de filtre priducte en categorie mode
function filterProduitMode() {
    
      var catégorieMode= datas.filter((produit)=>{
        if (produit.catégorie == 'Mode') {
          return produit
        }
      })
      console.log(catégorieMode);
      
     return datas;
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











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
  



   
function filterProduitMode() {
    var products=datas.flat()
      var catégorieMode= products.filter((produit,index)=>{
        if (produit.catégorie == 'Mode') {
          return produit
        }
      })
      console.log(catégorieMode);
      
     return products;
   }
  
  


   // console.log(elactroniqueCategoire);
   // elactroniqueCategoire.addEventListener("change", () =>console.log('nadi'))
   
   
function abdo() {
  var categoire = document.getElementById('catégorie');

  console.log(categoire.value);

  console.log("--------");

  if ( categoire.value === "elctronique") {
        console.log("elctronique | nadi");

        setTimeout(() => {
          filterProduitÉlectroniques(); 
          
         }, 1000);


      }

  if (categoire.value === "Maison") {

    setTimeout(() => {
      filterProduitMaison(); 
      
     }, 1000);


      }

  if (categoire.value === "Mode") {

    setTimeout(() => {
      filterProduitMode(); 
      
     }, 1000);


  }

  // for (let i = 0; i < categoire.options.length; i++) {
  //   if ( categoire.options[i].value === "elctronique") {
  //     console.log("elctronique | nadi");
  //   }
  //   else if (categoire.options[i].text === "Maison") {
  //     console.log("Maison | nadi");
  //   }
  //   else if (categoire.options[i].text === "Mode") {
  //     console.log("Mode | nadi");
  //   }
  // }
  
  
}




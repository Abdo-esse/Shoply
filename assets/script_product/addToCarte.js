let IDs= []
let count = document.querySelector('#count')




function addTOCarte(id,ele) {
 
  IDs.push(id)
 
  
  // let string = JSON.string(array)
  localStorage.setItem("Cartes qui add", JSON.stringify(IDs));
  let nbrProducts =  JSON.parse(localStorage.getItem("Cartes qui add"));

 
  count.textContent = nbrProducts.length;
 Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  
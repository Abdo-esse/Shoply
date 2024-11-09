let IDs= []
let count = document.querySelector('#count')
let button = document.querySelector('#button')
function addTOCarte(id,ele) {
  console.log(id);
  IDs.push(id)
  console.log(IDs);
  
  // let string = JSON.string(array)
  localStorage.setItem("Cartes qui add", JSON.stringify(IDs));
  let nbrProducts =  JSON.parse(localStorage.getItem("Cartes qui add"));
 console.log(nbrProducts.length);
 
  count.textContent = nbrProducts.length;

 button.style
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  console.log("sdfghj");
  
let IDs= [];

if (JSON.parse(localStorage.getItem("Cartes qui add"))) {
  IDs = JSON.parse(localStorage.getItem("Cartes qui add"));
}


let count = document.querySelector('#count');


function addTOCarte(id, elementBtn) {
console.log(id);

  
  elementBtn.disabled = true;

  console.log(elementBtn.id + "clicked");

  IDs.push(id)
 
  
  // let string = JSON.string(array)
  localStorage.setItem("Cartes qui add", JSON.stringify(IDs));

  IDs =  JSON.parse(localStorage.getItem("Cartes qui add"));

 
  count.textContent = IDs.length;



  }
  
function displayCout() {
  count.textContent = IDs.length;
}

displayCout();
  
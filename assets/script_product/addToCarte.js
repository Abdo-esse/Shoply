let IDs= []
function addTOCarte(id) {
  console.log(id);
  IDs.push(id)
  console.log(IDs);
  
  // let string = JSON.string(array)
  localStorage.setItem("Cartes qui add", JSON.stringify(IDs));

  
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  console.log("sdfghj");
  
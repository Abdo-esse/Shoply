let ajout = document.getElementById("prdt")


function increaseCount( b,prodId)  {
  let input = b.previousElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  input.value = value;
  
  calculatItemTotal(value, prodId)
}


function decreaseCount(b,prodId) {
  let input = b.nextElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 1 : value;
  if (value > 1) {
    value--;
    input.value = value;
  }
  calculatItemTotal(value, prodId)
}


function calculatItemTotal(value, prodId) {
    let totalHeader= document.getElementById("newtot"+prodId)
    let itemPrice= document.getElementById("itemPrice" + prodId).innerText
    console.log(totalHeader)
    let tot = 0;
    totalHeader.innerText = value * parseFloat(itemPrice, 10);
    let nbrProducts = JSON.parse(localStorage.getItem("Cartes qui add"));
    for (let j=0 ;j < nbrProducts.length ; j++){   
    
            // tot += parseFloat(document.getElementById("newtot"+nbrProducts[j]).innerText, 10);    
            tot += document.getElementById("newtot" + nbrProducts[j]).innerText ? parseFloat(document.getElementById("newtot" + nbrProducts[j]).innerText, 10)  : 0;    
  
    }
    console.log(tot)

    document.getElementById("Total").innerText = tot
}


const jsonFil = "/assets/data/products.json";
let productData;
fetch(jsonFil)
  .then(response => response.json())
  .then(data => {
    productData = data; 
    getCartItems();
    
  });




function getCartItems() {
  let cartHtml = ''; 
  let prdchoisi = [];
  let nbrProducts = JSON.parse(localStorage.getItem("Cartes qui add"));
  if (nbrProducts.length == 0) {
    document.getElementById("empty").innerHTML = "Your cart is empty";
}
    else
    {
  for (let i = 0; i < nbrProducts.length; i++) {
    
   
  
    prdchoisi.push(productData.find((product) => product.id == nbrProducts[i]));
    
    cartHtml += `
        <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div class="img-box"><img src="${prdchoisi[i].image}" alt="perfume bottle image" class="xl:w-[140px] rounded-xl object-cover"></div>
                <div class="pro-data w-full max-w-sm">
                    <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"> ${prdchoisi[i].title} </h5>
                    <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"> ${prdchoisi[i].catégorie} </p>
                    <h6 class="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center" id="itemPrice${prdchoisi[i].id}">${prdchoisi[i].price} $</h6>
                </div>
                <div class="flex">
                    <button type="button" class="font-medium text-red-500 hover:text-red-600" onclick="handleRemove(${prdchoisi[i].id})">Remove</button>
                </div>
            </div>
            <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <div class="flex items-center w-full mx-auto justify-center">
                    <button class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onclick="decreaseCount(this, ${prdchoisi[i].id})">
                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                    </button>
                    
                    <input type="text" class="qtt border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] py-[15px] text-center bg-transparent" value="1">
                    
                    <button class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onclick="increaseCount(this, ${prdchoisi[i].id})">
                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black up" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
                <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center" id="newtot${prdchoisi[i].id}"> </h6>
            </div>
        </div>

         
    `;
}
ajout.innerHTML = cartHtml; 
  
}
  }
function handleRemove(id){
 let nbrProducts = JSON.parse(localStorage.getItem("Cartes qui add"));
     
    const filterdata = nbrProducts.filter((el) => el != id);
    localStorage.setItem("Cartes qui add", JSON.stringify(filterdata));   
    getCartItems();
}



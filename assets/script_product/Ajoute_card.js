console.log("sdfghjklm");

const jsonFile = "/assets/data/electronique.json";
console.log(jsonFile);
const add = document.querySelector('#section');
console.log(add);

fetch(jsonFile)
.then(response => {
   return response.json()
})  
  .then(data => {
   console.log(data)
    console.log("mkkk");
   
    for (let i = 0; i < data.length; i++) {
      const product = data[i]; 
      const { id, title, price, description, image } = product;
      console.log(id, title, price, description, image);

     
      add.innerHTML += `
        <div class="product rounded-2xl p-5 cursor-pointer relative hover:shadow">
          <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"></path>
            </svg>
          </div>

          <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img src="${image}" alt="${title}" class="h-full w-full object-contain" />
          </div>

          <div>
            <h3 class="text-lg font-extrabold text-gray-800">${title}</h3>
            <p class="text-gray-600 text-sm mt-2">${description}</p>
            <div class="flex justify-between align-middle mt-4">
              <h4 class="text-lg text-gray-800 font-bold">${price}</h4>
              <button class="px-4 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-500 hover:text-white border-2 border-gray-900 hover:border-blue-500 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }) 
  .catch(err => console.log(response.json())
  )

console.log('mohamed');

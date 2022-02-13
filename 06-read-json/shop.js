// METHOD 1
// use a global variable to remember all the products
let catalog = [];

async function main() {
    try {
        let response = await axios.get('products.json');
        catalog = response.data;
        for (let product of response.data) {
            let optionElement = document.createElement('option');
            optionElement.value = product.sku;
            optionElement.innerHTML = product.name;
    
            document.querySelector('#product')
                    .appendChild(optionElement);
        }
    }
    catch(e) {
        console.log("Unable to read json file");
    }
}

main();

document.querySelector('#btnDisplay')
        .addEventListener('click', function(){
            let selectedProductSKU = document.querySelector('#product').value;
            // catalog is a global variable that stores an array
            // of all the products
            let targetProduct = null;
            for (let product of catalog) {
                if (selectedProductSKU == product.sku) {
                    targetProduct = product;
                    break;
                }
            }
            document.querySelector('#details').style.display = 'block';
            document.querySelector('#name').innerHTML = targetProduct.name;
            document.querySelector("#price").innerHTML = targetProduct.price;

        })



// METHOD 2: Annoymous function
// (async function(){
//     await axios.get('products.json');
   
// })();

// METHOD 3: Wait for all elements to be created first
// window.addEventListener('DOMContentLoaded', async function(){
//     await axios.get('products.json');
// })
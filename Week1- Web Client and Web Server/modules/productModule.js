let products = [
  { id: 1, name: "Pencil", cost: 1.34, onSale: false },
  { id: 2, name: "Pen", cost: 2.45, onSale: true },
  { id: 3, name: "Marker", cost: 1.15, onSale: false }
];

let idCounter = 3;

// CREATE

function createProduct(productData){
  return new Promise((resolve, reject)=>{
    idCounter++;
    productData.id = idCounter; // automatically assign and id
    products.push(productData);
    resolve();
  });
}

// READ (ONE)

function getProductById(id){
  return new Promise((resolve,reject)=>{
    let idx = products.findIndex(p => p.id == id);

    if(idx != -1){ // found the product
      resolve(products[idx]);
    }else{ // didn't find the product
      reject(`unable to find product with id: ${id}`);
    }

  });
}

// READ (ALL)

function getAllProducts(){
  return new Promise((resolve,reject)=>{
    resolve(products);
  });
}

// UPDATE (ONE)

function updateProductById(id, productData){
  return new Promise((resolve,reject)=>{
    let idx = products.findIndex(p => p.id == id);

    if(idx != -1){ // found the product

      productData.id = +id; // unary + converts string to number in JavaScript
      products[idx] = productData;

      resolve();
      
    }else{ // didn't find the product
      reject(`unable to find product with id: ${id}`);
    }
  });
}

// DELETE (ONE)

function deleteProductById(id){
  return new Promise((resolve,reject)=>{
    let idx = products.findIndex(p => p.id == id);

    if(idx != -1){ // found the product
      products.splice(idx, 1);
      resolve();
    }else{ // didn't find the product
      reject(`unable to find product with id: ${id}`);
    }
  });
}


module.exports = {getAllProducts, getProductById, createProduct, updateProductById, deleteProductById}




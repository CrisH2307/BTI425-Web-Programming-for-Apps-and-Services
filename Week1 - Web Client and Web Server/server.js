const express = require("express");
const prodModule = require("./modules/productModule");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req,res)=>{
  res.send("Hello World!");
});

// CREATE

app.use(express.json());

app.post("/api/products", async (req,res)=>{
  await prodModule.createProduct(req.body);
  res.status(201).send({message: "Product created"});
});


// READ (ONE)

app.get("/api/products/:id", async (req,res)=>{
   try{
    let product = await prodModule.getProductById(req.params.id);
    res.send(product);
   }catch(err){
    res.status(404).send({message: err});
   }
});

// READ (ALL)

app.get("/api/products", async (req,res)=>{
  let products = await prodModule.getAllProducts();
  res.send(products);
});


// UPDATE (ONE)

app.put("/api/products/:id", async (req,res)=>{
  try{
    await prodModule.updateProductById(req.params.id,req.body);
    res.send({message: "Product Updated"});
  }catch(err){
    res.status(404).send({message: err});
  }
});

// DELETE (ONE)

app.delete("/api/products/:id", async (req,res)=>{
  try{

    await prodModule.deleteProductById(req.params.id);
    res.send({message: "Product Deleted"});

  }catch(err){
    res.status(404).send({message: err});
  }
});

// Listen on HTTP_PORT

app.listen(HTTP_PORT, ()=>{
  console.log(`server listening on: ${HTTP_PORT}`);
});
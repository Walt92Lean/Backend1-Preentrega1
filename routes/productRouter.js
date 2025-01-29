import  { Router }  from "express";
import ProductManager from "../clases/ProductManager.js";

const productRouter = Router();
const PM = new ProductManager();


productRouter.get("/", (req, res) => {
    let products = PM.getProducts();

    res.send(products)
})


productRouter.get("/:pid", (req, res) => {
    let pid = req.params.pid;
    let product = PM.getProductById(pid);

    res.send(product)
})

export default productRouter



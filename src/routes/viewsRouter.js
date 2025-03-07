import { Router } from "express";
import ProductManager from "../classes/ProductManager.js";
import CartManager from "../classes/CartManager.js";

const viewsRouter = Router();
const PM = new ProductManager();
const CM = new CartManager();

viewsRouter.get("/", async (req, res) => {
    const {limit, page, query, sort} = req.query; 
    let products = await PM.getProducts(limit, page, query, sort);

    res.render("index", {products:products});
})

viewsRouter.get("/products/", async (req, res) => {
    const {limit, page, query, sort} = req.query; 
    let products = await PM.getProducts(limit, page, query, sort);

    res.render("index", {products:products});
})

viewsRouter.get("/products/:pid", async (req, res) => {
    const {pid} = req.params;    
    let product = await PM.getProductById(pid);

    res.render("product", {product:product});
})

viewsRouter.get("/carts/:cid", async (req, res) => {
    const cart = await CM.getCartById(req.params.cid);
   
    res.render("cart", { title: "Cart Details", cart });
});

viewsRouter.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
})

export default viewsRouter
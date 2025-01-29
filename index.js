import express from "express";
import productRouter from "./routes/productRouter.js";
import cartsRouter from "./routes/cartsRouter.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/products", productRouter);
app.use("/api/carts", cartsRouter);
app.listen(port, () => {
    console.log("Servidor en el puerto:" + port);
})


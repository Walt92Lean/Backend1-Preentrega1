import fs from "fs"

class ProductManager {
    constructor() {
        this.products = [],
        this.file = "products.json",
        this.createFile()
    }

    createFile() {
        if (!fs.existsSync(this.products)) {
            fs.writeFileSync(this.file, JSON.stringify(this.products))
        }
    }

    getProducts() {
        this.products = JSON.parse(fs.readFileSync(this.file, "utf-8"));
        return this.products;
    }

    getProductById(id) {
        this.products = JSON.parse(fs.readFileSync(this.file, "utf-8"));
        let product = this.products.find(item => item.id == id);

        return product ? product : {"error":"No se encontro el producto"};
    }

    addProduct(product) {
        return this.products;
    } 

    editProduct(id, product) {

    } 

    deleteProduct(id) {

    }
}


export default ProductManager
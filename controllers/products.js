let Product = require('../models/seller');

class TaskController {

    getProductById(id) {
        return Product.getProductById(id);
    }

    getAllProducts() {
        return Product.getAllProducts();
    } 

    addProduct(body) {
        return Product.addProduct(body);
    }

    updateProduct(body) {
        return Product.updateProduct(body);
    }

    rewriteProduct(body) {
        return Product.rewriteProduct(body);
    }

    deleteProduct(body) {
        return Product.deleteProduct(body);
    }

}

module.exports = new TaskController();

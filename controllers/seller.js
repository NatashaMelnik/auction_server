let Seller = require('../models/seller');

class TaskController {

    getSellerById(id) {
        return Seller.getSellerById(id);
    }

    getAllSellers() {
        return Seller.getAllSellers();
    }

    addSeller(body) {
        return Seller.addSeller(body);
    }

    updateSeller(body) {
        return Seller.updateSeller(body);
    }

    rewriteSeller(body) {
        return Seller.rewriteSeller(body);
    }

    deleteSeller(body) {
        return Seller.deleteSeller(body);
    }

}

module.exports = new TaskController();

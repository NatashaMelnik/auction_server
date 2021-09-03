let Seller = require('../models/seller');

class TaskController {

    // crud create read update delete

    getSellerById(id) {
        return Seller.getSellerById(id);
    }

    getAllSellers() {
        return Seller.getAllSellers();
    }

}

module.exports = new TaskController();

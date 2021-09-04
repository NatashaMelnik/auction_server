let Prodauction = require('../models/seller');

class TaskController {

    getProdauctionById(id) {
        return Prodauction.getProdauctionById(id);
    }

    getAllProdauction() {
        return Prodauction.getAllProdauction();
    } 

    addProdauction(body) {
        return Prodauction.addProdauction(body);
    }

    updateProdauction(body) {
        return Prodauction.updateProdauction(body);
    }

    rewriteProdauction(body) {
        return Prodauction.rewriteProdauction(body);
    }

    deleteProdauction(body) {
        return Prodauction.deleteProdauction(body);
    }

}

module.exports = new TaskController();

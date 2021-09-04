let Auctions = require('../models/seller');

class TaskController {

    getAuctionById(id) {
        return Auctions.getAuctionById(id);
    }

    getAllAuctions() {
        return Auctions.getAllAuctions();
    } 

    addAuction(body) {
        return Auctions.addAuction(body);
    }

    updateAuction(body) {
        return Auctions.updateAuction(body);
    }

    rewriteAuction(body) {
        return Auctions.rewriteAuction(body);
    }

    deleteAuction(body) {
        return Auctions.deleteAuction(body);
    }

}

module.exports = new TaskController();

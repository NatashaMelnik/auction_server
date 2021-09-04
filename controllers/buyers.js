let Buyers = require('../models/seller');

class TaskController {

    getBuyerById(id) {
        return Buyers.getBuyerById(id);
    }

    getAllBuyers() {
        return Buyers.getAllBuyers();
    } 

    addBuyer(body) {
        return Buyers.addBuyer(body);
    }

    updateBuyer(body) {
        return Buyers.updateBuyer(body);
    }

    rewriteBuyer(body) {
        return Buyers.rewriteBuyer(body);
    }

    deleteBuyer(body) {
        return Buyers.deleteBuyer(body);
    }

}

module.exports = new TaskController();

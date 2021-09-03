const router = require('express').Router()

const controller = require('../controllers/seller');

const read = function () {
    router.get('/:id', function (req, res) {
        controller.getSellerById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/all', function (req, res) {
        controller.getAllSellers()
            .then(data => {
                res.send(data);
            });
    });
}

const write = function () {
    
}

function crud() {
    read();
    write();
}

crud();

module.exports = router;
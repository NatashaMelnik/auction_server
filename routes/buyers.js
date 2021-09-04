const router = require('express').Router()

const controller = require('../controllers/auctions');

const read = function () {
    router.get('/all', function (req, res) {
        controller.getAllBuyers()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            });
    });
    router.get('/:id', function (req, res) {
        controller.getBuyerById(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            });
    });
}

const write = function () {
    router.post('/', function (req, res) {
        controller.addBuyer(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.patch('/', function (req, res) {
        controller.updateBuyer(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.put('/', function (req, res) {
        controller.rewriteBuyer(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.delete('/', function (req, res) {
        controller.deleteBuyer(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
}

function crud() {
    read();
    write();
}

crud();

module.exports = router;
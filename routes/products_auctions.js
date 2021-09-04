const router = require('express').Router()

const controller = require('../controllers/prodauction');

const read = function () {
    router.get('/all', function (req, res) {
        controller.getAllProdauction()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            });
    });
    router.get('/:id', function (req, res) {
        controller.getProdauctionById(req.params.id)
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
        controller.addProdauction(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.patch('/', function (req, res) {
        controller.updateProdauction(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.put('/', function (req, res) {
        controller.rewriteProdauction(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.delete('/', function (req, res) {
        controller.deleteProdauction(req.body)
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
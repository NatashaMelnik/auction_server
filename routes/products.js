const router = require('express').Router()

const controller = require('../controllers/products');

const read = function () {
    router.get('/all', function (req, res) {
        controller.getAllProducts()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            });
    });
    router.get('/:id', function (req, res) {
        controller.getProductById(req.params.id)
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
        controller.addProduct(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.patch('/', function (req, res) {
        controller.updateProduct(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.put('/', function (req, res) {
        controller.rewriteProduct(req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({ error: err }));
    });
    router.delete('/', function (req, res) {
        controller.deleteProduct(req.body)
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
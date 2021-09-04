const express = require('express');
const router = express.Router();

const seller = require('./seller');
const products = require('./products');
const auctions = require('./auctions');
const buyers = require('./buyers');
const products_auction = require('./products_auctions');
// 

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});


router.use('/seller/', seller);
router.use('/products/', products);
router.use('/auctions/', auctions);
router.use('/buyers/', buyers);
router.use('/products_auction/', products_auction)
// 

module.exports = router;

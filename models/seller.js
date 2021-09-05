const sequelize = require('./config');
const Sequelize = require('sequelize');

const seller = sequelize.define('sellers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    fio: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

const products = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    sold: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    id_seller: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_buyer: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fin_price: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    id_auction: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const auctions = sequelize.define('auctions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

const buyers = sequelize.define('buyers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    fio: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

const products_auction = sequelize.define('products_auction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_auction: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lot: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    start_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fin_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_buyer: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

products.hasOne(seller);
products.hasOne(buyers);
products.hasOne(auctions);
// seller.belongsToMany(products);
// products_auction.hasOne(auctions);
// products_auction.hasOne(buyers);

class SellerClass {

    getSellerById(id) {
        return seller.findAll({ where: { id: +id } })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    getAllSellers() {
        return seller.findAll({ order: ['id'] })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    addSeller(body) {
        return seller.create({
            fio: body.fio
        }).then(res => {
            // const task = { id: res.id, name: res.name, done: res.done, due_date: res.due_date };
            return res;
        }).catch(err => console.log(err));
    }

    updateSeller(body) {
        return seller.update({ fio: body.fio }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    rewriteSeller(body) {
        return seller.update({ fio: body.fio }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    deleteSeller(body) {
        return seller.destroy({
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

}

class ProductsClass {
    getProductById(id) {
        return products.findAll({ where: { id: +id } })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    getAllProducts() {
        return products.findAll({ order: ['id'] })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    addProduct(body) {
        return products.create({
            id_auction: body.id_auction,
            lot: body.lot,
            start_price: body.start_price,
            fin_price: body.fin_price,
            id_buyer: body.id_buyer,
            id_seller: body.id_seller
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    updateProduct(body) {
        return products.update({ sold: body.sold }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    rewriteProduct(body) {
        return products.update({
            id_auction: body.id_auction,
            lot: body.lot,
            start_price: body.start_price,
            fin_price: body.fin_price,
            id_buyer: body.id_buyer,
            id_seller: body.id_seller
        }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    deleteSeller(body) {
        return products.destroy({
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }
}

class AuctionClass {

    getAuctionById(id) {
        return auctions.findAll({ where: { id: +id } })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    getAllAuctions() {
        return auctions.findAll({ order: ['id'] })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    addAuction(body) {
        return auctions.create({
            date: body.date
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    updateAuction(body) {
        return auctions.update({ date: body.date }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    rewriteAuction(body) {
        return auctions.update({
            date: body.date
        }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    deleteAuction(body) {
        return auctions.destroy({
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }
}

class BuyerClass {
    getBuyerById(id) {
        return buyers.findAll({ where: { id: +id } })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    getAllBuyers() {
        return buyers.findAll({ order: ['id'] })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    addBuyer(body) {
        return buyers.create({
            fio: body.fio
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    updateBuyer(body) {
        return buyers.update({ fio: body.fio }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    rewriteBuyer(body) {
        return buyers.update({
            fio: body.fio
        }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    deleteBuyer(body) {
        return buyers.destroy({
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }
}

class ProdauctionClass {
    getProdauctionById(id) {
        return products_auction.findAll({ where: { id: +id } })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    getAllProdauction() {
        return products_auction.findAll({ order: ['id'] })
            .then(res => {
                return res;
            }).catch(err => console.log(err));
    }

    addProdauction(body) {
        return products_auction.create({
            id_auction: body.id_auction,
            lot: body.lot,
            start_price: body.start_price,
            fin_price: body.fin_price,
            id_buyer: body.id_buyer
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    updateProdauction(body) {
        return products_auction.update({ fin_price: body.fin_price }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    rewriteProdauction(body) {
        return products_auction.update({
            id_auction: body.id_auction,
            lot: body.lot,
            start_price: body.start_price,
            fin_price: body.fin_price,
            id_buyer: body.id_buyer
        }, {
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }

    deleteProdauction(body) {
        return products_auction.destroy({
            where: { id: +body.id }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));
    }
}

const Seller = new SellerClass();
const Product = new ProductsClass();
const Auction = new AuctionClass();
const Buyer = new BuyerClass();
const Prodauction = new ProdauctionClass();

module.exports = Seller;
module.exports = Product;
module.exports = Auction;
module.exports = Buyer;
module.exports = Prodauction;
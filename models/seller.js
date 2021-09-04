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
    type: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    sold: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    id_seller: {
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

// products.hasOne(seller);
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
            name: body.name,
            type: body.type,
            date: body.date,
            sold: body.sold,
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
            name: body.name,
            type: body.type,
            date: body.date,
            sold: body.sold,
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

const Seller = new SellerClass();
const Product = new ProductsClass();

module.exports = Seller;
module.exports = Product;

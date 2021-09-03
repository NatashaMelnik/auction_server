const sequelize = require('./config');
const Sequelize = require('sequelize');

const seller = sequelize.define("seller", {
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


// efasefdwefd.hasOne(edfsecf);

class Seller {

    getSellerById(id) {
        return seller.findAll({ where: { id: +id }, order: ['id'], raw: true })
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


}

const Seller = new Seller();

module.exports = Seller;

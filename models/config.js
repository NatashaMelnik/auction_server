const Sequelize = require('sequelize');
const sequelize = new Sequelize('auction_db', 'postgres', 'qazpoi', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
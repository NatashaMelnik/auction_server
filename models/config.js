const Sequelize = require('sequelize');
const sequelize = new Sequelize('birthdays', 'postgres', '123456', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
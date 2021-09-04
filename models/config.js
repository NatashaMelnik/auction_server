const Sequelize = require('sequelize');
const sequelize = new Sequelize('army_bd', 'postgres', 'qazpoi', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
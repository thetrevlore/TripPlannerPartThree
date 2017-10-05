const Sequelize = require('sequelize');
const db = require('./_db');

const Itinerary = db.define('itinerary', {
    id: { type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Itinerary;

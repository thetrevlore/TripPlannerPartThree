const Sequelize = require('sequelize');
const db = require('./_db');

const Place = require('./places');
const Restaurant = require('./restaurants')
const Activity = require('./activities');
const Hotel = require('./hotels');
const Itinerary = require('./itineraries');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Itinerary.belongsToMany(Hotel, { through: 'itinerary_hotel' });
Itinerary.belongsToMany(Restaurant, { through: 'itinerary_restaurant' });
Itinerary.belongsToMany(Activity, { through: 'itinerary_activity' });

module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity,
	Itinerary
};
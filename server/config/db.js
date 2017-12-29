const Sequelize = require('sequelize');

const Lumm = new Sequelize('mysql://root:@localhost/lumm');

module.exports = {
	Lumm
}
const Sequelize = require('sequelize');

const LummDataBase = new Sequelize('mysql://root:@localhost/lumm');

module.exports = {
	LummDataBase
}
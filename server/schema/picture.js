module.exports = function(sequelize, DataTypes){
	return sequelize.define('picture', {
		id:{
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		url:{
			type: DataTypes.CHAR(255),
			allowNull: false
		},
		name:{
			type: DataTypes.CHAR(255),
			allowNull: false
		},
	},{
		tableName: 'picture'
	});
};
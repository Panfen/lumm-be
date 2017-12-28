const db = require('../config/db.js');
const pictureModel = '../schema/picture.js';   // 引入表结构

const Lumm = db.Lumm;   // 引入数据库

const Picture = Lumm.import(pictureModel);

const getPictureByNum = async (num) => {
	// Project.findAll({ offset: 5, limit: 5 })
	const list = await List.findAll({
		limit: num
	});
	return list;
}

module.exports = {
	getPictureByNum
}
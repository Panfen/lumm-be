const picture = require('../models/pcture.js');

const getPicList = async (ctx) => {
	let result = await picture.getPicList();
	ctx.body = {
		code: '200',
		result: result
	}
}

module.exports = {
	getPicList
}
const dotenv = require('dotenv');

dotenv.config();

const variables = {
	server: {
		host: process.env.SERVER_HOST || 'localhost',
		port: process.env.SERVER_PORT || 3000,
	},
	database: {
		dialect: process.env.DB_DIALECT || 'mysql',
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
		name: process.env.DB_NAME || 'village_market',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '12345678',
	},
};

module.exports = variables;

const dotenv = require('dotenv');

dotenv.config();

const variables = {
	server: {
		host: process.env.SERVER_HOST,
		port: process.env.SERVER_PORT,
	},
	database: {
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		name: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	},
};

module.exports = variables;

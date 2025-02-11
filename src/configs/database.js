const Sequelize = require('sequelize');
const environment = require('./environment');

const database = new Sequelize(
	environment.database.name,
	environment.database.user,
	environment.database.password,
	{
		dialect: environment.database.dialect,
		host: environment.database.host,
		port: environment.database.port,
	}
);

module.exports = database;

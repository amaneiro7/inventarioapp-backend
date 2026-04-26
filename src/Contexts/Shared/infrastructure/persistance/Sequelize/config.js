require('dotenv').config()

const {
	POSTGRES_USER: username,
	POSTGRES_PASSWORD: password,
	POSTGRES_DB: database,
	POSTGRES_HOST: host,
	POSTGRES_PORT: port
} = process.env

module.exports = {
	development: {
		username,
		password,
		database,
		port,
		host,
		dialect: 'postgres',
		migrationStorage: 'sequelize',
		migrationStorageTableName: 'sequelize_migrations',
		seederStorage: 'sequelize',
		seederStorageTableName: 'sequelize_data'
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql'
	},
	production: {
		username,
		password,
		database,
		port: 5430,
		host,
		dialect: 'postgres',
		migrationStorage: 'sequelize',
		migrationStorageTableName: 'sequelize_migrations',
		seederStorage: 'sequelize',
		seederStorageTableName: 'sequelize_data'
	}
}

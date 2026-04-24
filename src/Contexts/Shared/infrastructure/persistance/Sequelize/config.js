require('dotenv').config()

console.log('Database configuration loaded:')
console.log('POSTGRES_USER:', process.env.POSTGRES_USER)
console.log('POSTGRES_PASSWORD:', process.env.POSTGRES_PASSWORD)
console.log('POSTGRES_DB:', process.env.POSTGRES_DB)
console.log('POSTGRES_HOST:', process.env.POSTGRES_HOST)
console.log('POSTGRES_PORT:', process.env.POSTGRES_PORT)

module.exports = {
	development: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		port: process.env.POSTGRES_PORT,
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres',
		migrationStorage: 'sequelize',
		migrationStorageTableName: 'sequelize_migrations',
		seederStorage: 'sequelize',
		seederStorageTableName: 'sequelize_data',
		logging: console.log
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql'
	},
	production: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		port: 5430,
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres',
		migrationStorage: 'sequelize',
		migrationStorageTableName: 'sequelize_migrations',
		seederStorage: 'sequelize',
		seederStorageTableName: 'sequelize_data',
		logging: console.log
	}
}

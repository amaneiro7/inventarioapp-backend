export interface MongoConfig {
	url?: string
	user?: string
	password?: string
	host?: string
	port?: string | number
	dbName?: string
}

export default MongoConfig

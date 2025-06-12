/* eslint-disable no-prototype-builtins */
// import 'dotenv/config'
import dotenv from 'dotenv'

const envs: Record<string, string> = {
	production: '.env.prod',
	development: '.env.development',
	e2e: '.env.e2e'
}

const { NODE_ENV: env = 'development' } = process.env

const options = {
	path: envs[env]
}
dotenv.config(options)

const {
	PORT: port = '3000',
	POSTGRES_USER: postgresUser = 'postgres',
	POSTGRES_PASSWORD: postgresPassword = 'Man12345*',
	POSTGRES_HOST: postgresHost = 'localhost',
	POSTGRES_PORT: postgresPort = 5432,
	POSTGRES_DB_NAME: postgresDBName = 'inventoryApp',
	POSTGRES_SSL: postgresSSL = false,
	REDIS_HOST: redisHost = 'localhost',
	REDIS_PORT: redisPort = 6379,
	REDIS_PASSWORD: redisPassword = 'Man12345*',
	SIGNED_COOKIE_SECRET: signedCookie = 'signed_cookie_secret',
	ACCESS_TOKEN_SECRET: accessTokenSecret = 'access_token_scret',
	ACCESS_TOKEN_EXPIRES_IN: accessTokenExpiresIn = '15m',
	REFRESH_TOKEN_EXPIRES_IN: refreshTokenExpiresIn = '30d',
	REFRESH_TOKEN_SECRET: refreshTokenSecret = 'refresh_token_scret',
	SMTP_EMAIL: smtpEmail = 'jaasnavas0811@gmail.com',
	SMTP_PASSWORD: smtpPassword = 'vldpmrrvdvcnrjdx',
	MONITORING_ENABLED: rawMonitoringEnabled = 'false'
} = process.env

type Config = {
	env: string
	isProd: boolean
	baseApiUrl: string
	port: string
	postgres: {
		user: string
		password: string
		host: string
		port: string | number
		dbName: string
		ssl: boolean
	}
	redis: {
		host: string
		port: number
		password: string
	}
	signedCookie: string
	accessTokenSecret: string
	refreshTokenSecret: string
	accessTokenExpiresIn: string
	refreshTokenExpiresIn: string
	smtpEmail: string
	smtpPassword: string
	isMonitoringActive: boolean
}

export const config: Config = {
	env,
	isProd: env === 'production',
	baseApiUrl: '/api/v2',
	port,
	postgres: {
		user: postgresUser,
		password: postgresPassword,
		host: postgresHost,
		port: postgresPort,
		dbName: postgresDBName,
		ssl: postgresSSL === 'true'
	},
	redis: {
		host: redisHost,
		port: Number(redisPort),
		password: redisPassword
	},
	signedCookie,
	accessTokenSecret,
	refreshTokenSecret,
	accessTokenExpiresIn,
	refreshTokenExpiresIn,
	smtpEmail,
	smtpPassword,
	isMonitoringActive: rawMonitoringEnabled === 'true' || rawMonitoringEnabled === 'enabled'
}

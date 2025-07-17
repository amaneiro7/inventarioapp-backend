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
	MONITORING_ENABLED: rawMonitoringEnabled = 'false',
	DEVICE_MONITORING_ENABLED: rawDeviceMonitoringEnabled,
	DEVICE_MONITORING_CONCURRENCY_LIMIT: deviceMonitoringConcurrencyLimit,
	DEVICE_MONITORING_IDLE_TIME_MS: deviceMonitoringIdleTimeMs,
	DEVICE_MONITORING_START_HOUR: deviceMonitoringStartHour,
	DEVICE_MONITORING_END_HOUR: deviceMonitoringEndHour,
	DEVICE_MONITORING_START_DAY_OF_WEEK: deviceMonitoringStartDayOfWeek,
	DEVICE_MONITORING_END_DAY_OF_WEEK: deviceMonitoringEndDayOfWeek,
	DEVICE_MONITORING_DISABLE_TIME_CHECKS: rawDeviceMonitoringDisableTimeChecks,
	LOCATION_MONITORING_ENABLED: rawLocationMonitoringEnabled,
	LOCATION_MONITORING_CONCURRENCY_LIMIT: locationMonitoringConcurrencyLimit,
	LOCATION_MONITORING_IDLE_TIME_MS: locationMonitoringIdleTimeMs,
	LOCATION_MONITORING_START_HOUR: locationMonitoringStartHour,
	LOCATION_MONITORING_END_HOUR: locationMonitoringEndHour,
	LOCATION_MONITORING_START_DAY_OF_WEEK: locationMonitoringStartDayOfWeek,
	LOCATION_MONITORING_END_DAY_OF_WEEK: locationMonitoringEndDayOfWeek,
	LOCATION_MONITORING_DISABLE_TIME_CHECKS: rawLocationMonitoringDisableTimeChecks
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
	monitoring: {
		device: {
			isDeviceMonitoringEnabled: boolean
			deviceMonitoringConcurrencyLimit: number
			deviceMonitoringIdleTimeMs: number
			deviceMonitoringStartHour: number
			deviceMonitoringEndHour: number
			deviceMonitoringStartDayOfWeek: number
			deviceMonitoringEndDayOfWeek: number
			isDeviceMonitoringDisableTimeChecks: boolean
		}
		location: {
			isLocationMonitoringEnabled: boolean
			locationMonitoringConcurrencyLimit: number
			locationMonitoringIdleTimeMs: number
			locationMonitoringStartHour: number
			locationMonitoringEndHour: number
			locationMonitoringStartDayOfWeek: number
			locationMonitoringEndDayOfWeek: number
			isLocationMonitoringDisableTimeChecks: boolean
		}
	}
	signedCookie: string
	accessTokenSecret: string
	refreshTokenSecret: string
	accessTokenExpiresIn: number
	refreshTokenExpiresIn: number
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
	monitoring: {
		device: {
			isDeviceMonitoringEnabled: rawDeviceMonitoringEnabled === 'true',
			deviceMonitoringConcurrencyLimit: Number(deviceMonitoringConcurrencyLimit),
			deviceMonitoringIdleTimeMs: Number(deviceMonitoringIdleTimeMs),
			deviceMonitoringStartHour: Number(deviceMonitoringStartHour),
			deviceMonitoringEndHour: Number(deviceMonitoringEndHour),
			deviceMonitoringStartDayOfWeek: Number(deviceMonitoringStartDayOfWeek),
			deviceMonitoringEndDayOfWeek: Number(deviceMonitoringEndDayOfWeek),
			isDeviceMonitoringDisableTimeChecks: rawDeviceMonitoringDisableTimeChecks === 'true'
		},
		location: {
			isLocationMonitoringEnabled: rawLocationMonitoringEnabled == 'true',
			locationMonitoringConcurrencyLimit: Number(locationMonitoringConcurrencyLimit),
			locationMonitoringIdleTimeMs: Number(locationMonitoringIdleTimeMs),
			locationMonitoringStartHour: Number(locationMonitoringStartHour),
			locationMonitoringEndHour: Number(locationMonitoringEndHour),
			locationMonitoringStartDayOfWeek: Number(locationMonitoringStartDayOfWeek),
			locationMonitoringEndDayOfWeek: Number(locationMonitoringEndDayOfWeek),
			isLocationMonitoringDisableTimeChecks: rawLocationMonitoringDisableTimeChecks === 'true'
		}
	},
	signedCookie,
	accessTokenSecret,
	refreshTokenSecret,
	accessTokenExpiresIn: Number(accessTokenExpiresIn),
	refreshTokenExpiresIn: Number(refreshTokenExpiresIn),
	smtpEmail,
	smtpPassword,
	isMonitoringActive: rawMonitoringEnabled === 'true' || rawMonitoringEnabled === 'enabled'
}

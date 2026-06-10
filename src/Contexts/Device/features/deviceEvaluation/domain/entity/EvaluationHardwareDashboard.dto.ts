import { MigrationRuleDto } from './MigrationRule.dto'

export interface EvaluationHardwareDeviceDto {
	deviceId: string
	serial: string
	location: string
	employee: string
	hardware: {
		processor: string
		ram: string
		disk: string
	}
	status: string
	reasons: string[]
}

export interface EvaluationHardwareDashboardResponse {
	message?: string
	migrationRule?: MigrationRuleDto
	summary: {
		total: number
		apto: number
		noApto: number
	}
	devices: EvaluationHardwareDeviceDto[]
	info: {
		total: number
		page: number
		totalPage: number
	}
}

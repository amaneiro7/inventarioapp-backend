import type { MigrationRuleDto } from './MigrationRule.dto'

export interface EvaluationHardwareDeviceDto {
	deviceId: string
	serial: string
	location: {
		administrativeRegion: string
		region: string
		state: string
		city: string
		site: string
		location: string
	}
	employee: {
		name: string
		lastName: string
		userName: string
	}
	hardware: {
		processor: string
		ram: string
		disk: string
		computerName: string
		ipAddress: string
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
		isRamOk: number
		isDiskOk: number
		isProcessorOk: number
	}
	devices: EvaluationHardwareDeviceDto[]
	info: {
		total: number
		page: number
		totalPage: number
	}
}

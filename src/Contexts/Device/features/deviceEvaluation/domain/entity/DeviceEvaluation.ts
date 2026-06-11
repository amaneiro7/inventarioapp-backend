import type { EvaluationHardwareDeviceDto } from './EvaluationHardwareDashboard.dto'
import type { EvaluationResult } from './MigrationRule.dto'

export class DeviceEvaluation {
	constructor(
		private readonly deviceId: string,
		private readonly serial: string,
		private readonly administrativeRegion: string,
		private readonly region: string,
		private readonly state: string,
		private readonly city: string,
		private readonly site: string,
		private readonly location: string,
		private readonly employeeName: string,
		private readonly employeeLastNameName: string,
		private readonly employeeUserName: string,
		private readonly processorName: string,
		private readonly ramDisplay: string,
		private readonly diskDisplay: string,
		private readonly computerName: string,
		private readonly ipAddress: string,
		private readonly evaluation: EvaluationResult
	) {}
	// Getters limpios paara la capa de aplicación o los DTOs consuman los datos
	public toPublicJson(): EvaluationHardwareDeviceDto {
		return {
			deviceId: this.deviceId,
			serial: this.serial,
			location: {
				administrativeRegion: this.administrativeRegion,
				region: this.region,
				state: this.state,
				city: this.city,
				site: this.site,
				location: this.location
			},
			employee: {
				name: this.employeeName,
				lastName: this.employeeLastNameName,
				userName: this.employeeUserName
			},
			hardware: {
				processor: this.processorName,
				ram: this.ramDisplay,
				disk: this.diskDisplay,
				computerName: this.computerName,
				ipAddress: this.ipAddress
			},
			status: this.evaluation.isApto ? 'Apto' : 'No Apto',
			reasons: this.evaluation.reasons
		}
	}
}

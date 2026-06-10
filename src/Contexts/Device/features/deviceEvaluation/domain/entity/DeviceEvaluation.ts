import type { EvaluationResult } from './MigrationRule.dto'

export class DeviceEvaluation {
	constructor(
		private readonly deviceId: string,
		private readonly serial: string,
		private readonly locationName: string,
		private readonly employeeName: string,
		private readonly processorName: string,
		private readonly ramDisplay: string,
		private readonly diskDisplay: string,
		private readonly computerName: string,
		private readonly ipAddress: string,
		private readonly evaluation: EvaluationResult
	) {}
	// Getters limpios paara la capa de aplicación o los DTOs consuman los datos
	public toPublicJson() {
		return {
			deviceId: this.deviceId,
			serial: this.serial,
			location: this.locationName,
			employee: this.employeeName,
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

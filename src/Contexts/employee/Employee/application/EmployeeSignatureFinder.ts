import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { HierarchyLevel } from '../../Unidad/domain/entity/hierarchyLevelTranslations'
import type { EmployeeSignatureDto } from '../domain/entity/EmployeeSignatureDto.dto'
import type { EmployeeRepository } from '../domain/Repository/EmployeeRepository'

export class EmployeeSignatureFinder {
	private readonly employeeRepository: EmployeeRepository

	constructor({ employeeRepository }: { employeeRepository: EmployeeRepository }) {
		this.employeeRepository = employeeRepository
	}

	async run({ identifier }: { identifier: string }): Promise<EmployeeSignatureDto> {
		const cleanIdentifier = identifier.trim().toLowerCase()
		const isCode = !isNaN(Number(cleanIdentifier))

		// 1. Buscar al empleado por userName o por código
		let employee = isCode
			? await this.employeeRepository.findByEmployeeCode(Number(cleanIdentifier))
			: await this.employeeRepository.findByUserName(cleanIdentifier)

		// 2. Validar que exista y esté activo en la empresa
		if (!employee) {
			if (isCode) {
				throw new EmployeeDoesNotExistError({ employeeCode: cleanIdentifier })
			} else {
				throw new EmployeeDoesNotExistError({ username: cleanIdentifier })
			}
		}
		if (!employee?.isStillWorking) {
			throw new EmployeeDoesNotExistError({
				message: `El empleado con el identificador '${cleanIdentifier}' ya no se encuentra activo en la empresa.`
			})
		}

		// 3. Mapear y sanitizar la información para la firma
		const { userName, name, lastName, email, phone, extension, cargo, unidad, location } = employee
		const phoneNumber = [...(extension ?? []), ...(phone ?? [])]
		const phoneNumberText = phoneNumber?.map(tel => `+58 ${this.formatearTelefono(tel)}`).join(' / ')
		const levels = unidad?.full_chain?.levels ?? []

		return {
			userName,
			name: name ?? '',
			lastName: lastName ?? '',
			cargo: cargo?.name ?? '',
			vicepresidenciaEjecutiva: levels[HierarchyLevel.VPE] ?? '',
			vicepresidencia: levels[HierarchyLevel.VP] ?? '',
			siteName: location?.name ?? '',
			typeOfSite: location?.typeOfSiteId ?? '',
			email: email ?? '',
			address: location?.site?.address ?? '',
			numbers: phoneNumberText ?? ''
		}
	}

	private formatearTelefono(numero?: string) {
		if (!numero) {
			return ''
		}
		const limpio = numero.replace(/\D/g, '')
		const match = limpio.match(/^(\d{4})(\d{3})(\d{4})$/)
		if (match) {
			return `(${match[1]})-${match[2]}.${match[3]}`
		}
		return ''
	}
}

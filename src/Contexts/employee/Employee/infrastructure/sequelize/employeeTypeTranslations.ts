import { EmployeeTypesEnum } from '../../domain/valueObject/EmployeeType'

export const employeeTypeTranslations: Record<EmployeeTypesEnum, string> = {
	[EmployeeTypesEnum.GENERIC]: 'Usuario Genérico',
	[EmployeeTypesEnum.REGULAR]: 'Empleado Regular',
	[EmployeeTypesEnum.SERVICE]: 'Usuario de Sistema',
	[EmployeeTypesEnum.APPRENTICE]: 'Aprendiz',
	[EmployeeTypesEnum.CONTRACTOR]: 'Contratado'
}

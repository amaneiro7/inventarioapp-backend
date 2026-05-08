import { UnidadId } from '../../../../src/Contexts/employee/Unidad/domain/valueObject/UnidadId'
import { InvalidArgumentError } from '../../../../src/Contexts/Shared/domain/errors/ApiError'

describe('UnidadId', () => {
	it('should create a valid UnidadId from a UUID string', () => {
		const uuid = UnidadId.random().value
		const unidadId = new UnidadId(uuid)
		expect(unidadId).toBeInstanceOf(UnidadId)
		expect(unidadId.value).toBe(uuid)
	})

	it('should throw InvalidArgumentError for an invalid UUID string', () => {
		const invalidUuid = 'invalid-uuid-string'
		expect(() => new UnidadId(invalidUuid)).toThrow(InvalidArgumentError)
		expect(() => new UnidadId(invalidUuid)).toThrow(`<${invalidUuid}> is not valid <UnidadId>`)
	})

	it('should return true for equal UnidadId instances', () => {
		const uuid = UnidadId.random().value
		const unidadId1 = new UnidadId(uuid)
		const unidadId2 = new UnidadId(uuid)
		expect(unidadId1.equals(unidadId2)).toBe(true)
	})

	it('should return false for different UnidadId instances', () => {
		const uuid1 = UnidadId.random().value
		const uuid2 = UnidadId.random().value
		const unidadId1 = new UnidadId(uuid1)
		const unidadId2 = new UnidadId(uuid2)

		expect(unidadId1.equals(unidadId2)).toBe(false)
	})
})

import { EventBus } from '../../../Shared/domain/event/EventBus'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

export class AccessPolicyCreator {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly eventBus: EventBus
	constructor({
		eventBus,
		accessPolicyRepository
	}: {
		accessPolicyRepository: AccessPolicyRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.eventBus = eventBus
	}

	async run(params: AccessPolicyParams): Promise<void> {
		// Opcional: Aquí se podría añadir una lógica para verificar si ya existe
		// una regla idéntica (mismo cargoId y departamentoId) antes de crearla,
		// para evitar duplicados y lanzar un error de negocio.

		const policy = AccessPolicy.create(params)

		await this.accessPolicyRepository.save(policy.toPrimitives())

		// Publicar los eventos de dominio registrados en la entidad.
		// Por ejemplo, un AccessPolicyCreatedDomainEvent si fuera necesario.
		await this.eventBus.publish(policy.pullDomainEvents())
	}
}

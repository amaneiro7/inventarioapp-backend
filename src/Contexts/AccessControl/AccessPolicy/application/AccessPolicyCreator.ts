import { EventBus } from '../../../Shared/domain/event/EventBus'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

export class AccessPolicyCreator {
	private readonly repository: AccessPolicyRepository
	private readonly eventBus: EventBus
	constructor({ eventBus, repository }: { repository: AccessPolicyRepository; eventBus: EventBus }) {
		this.repository = repository
		this.eventBus = eventBus
	}

	async run(params: AccessPolicyParams): Promise<void> {
		// Opcional: Aquí se podría añadir una lógica para verificar si ya existe
		// una regla idéntica (mismo cargoId y departamentoId) antes de crearla,
		// para evitar duplicados y lanzar un error de negocio.

		const policy = AccessPolicy.create(params)

		await this.repository.save(policy)

		// Publicar los eventos de dominio registrados en la entidad.
		// Por ejemplo, un AccessPolicyCreatedDomainEvent si fuera necesario.
		await this.eventBus.publish(policy.pullDomainEvents())
	}
}

import { type TypeOfSitePrimitives } from '../domain/TypeOfSite'
import { type TypeOfSiteRepository } from '../domain/TypeOfSiteRepository'

export class TypeOfSiteFinderAll {
	constructor(private readonly typeOfSiteRepository: TypeOfSiteRepository) {}

	async run(): Promise<TypeOfSitePrimitives[]> {
		return await this.typeOfSiteRepository.searchAll()
	}
}

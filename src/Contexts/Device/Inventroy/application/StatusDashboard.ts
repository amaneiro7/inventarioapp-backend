import { StatusDashboardRepository } from '../domain/StatusDashboardRepository'

export class StatusDashboard {
	private readonly statusDashboardRepository: StatusDashboardRepository
	constructor({ statusDashboardRepository }: { statusDashboardRepository: StatusDashboardRepository }) {
		this.statusDashboardRepository = statusDashboardRepository
	}

	async run(): Promise<{}> {
		const [statuses] = await Promise.all([this.statusDashboardRepository.run()])
		return {
			...statuses
		}
	}
}

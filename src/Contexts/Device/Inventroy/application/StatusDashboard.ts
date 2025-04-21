import { StatusDashboardRepository } from '../domain/StatusDashboardRepository'

export class StatusDashboard {
	constructor(private readonly statusDashboardRepository: StatusDashboardRepository) {}

	async run(): Promise<{}> {
		const [statuses] = await Promise.all([this.statusDashboardRepository.run()])
		return {
			...statuses
		}
	}
}

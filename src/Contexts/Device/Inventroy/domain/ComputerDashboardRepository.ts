export abstract class ComputerDashboardRepository {
	abstract countByStatus(): Promise<{}>
	abstract countByBrand(): Promise<{}>
	abstract countTotalHDD(): Promise<{}>
}

export abstract class ComputerDashboardRepository {
	abstract countTotal(): Promise<{}>
	abstract countByStatus(): Promise<{}>
	abstract countByCategory(): Promise<{}>
	abstract countByBrand(): Promise<{}>
	abstract countByRegion(): Promise<{}>
}

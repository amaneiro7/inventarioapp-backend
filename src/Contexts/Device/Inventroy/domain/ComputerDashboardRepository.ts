export abstract class ComputerDashboardRepository {
	abstract countByStatus(): Promise<{}>
	abstract countByCategory(): Promise<{}>
	abstract countByBrand(): Promise<{}>
	abstract countByRegion(): Promise<{}>
	abstract countTotalHDD(): Promise<{}>
	abstract countTotalOperatingSystem(): Promise<{}>
}

export abstract class ComputerDashboardRepository {
	abstract countTotal(): Promise<{}>
	abstract countActiveEmployees(): Promise<{}>
	abstract countTotalAgencies(): Promise<{}>
	abstract countByStatus(): Promise<{}>
	abstract countByCategory(): Promise<{}>
	abstract countByBrand(): Promise<{}>
	abstract countByRegion(): Promise<{}>
	abstract countTotalHDD(): Promise<{}>
	abstract countTotalOperatingSystem(): Promise<{}>
}

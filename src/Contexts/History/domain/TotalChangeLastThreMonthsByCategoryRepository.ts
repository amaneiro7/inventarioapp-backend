export abstract class TotalChangeLastThreMonthsByCategoryRepository {
	abstract run({ months }: { months?: number }): Promise<{ name: string }[]>
}

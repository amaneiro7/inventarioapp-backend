import { HistoryDto } from '../../History/domain/History.dto'

export function lastHistoryUpdated(history: HistoryDto[]) {
	return history.sort(
		(a, b) =>
			new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)[0]
}

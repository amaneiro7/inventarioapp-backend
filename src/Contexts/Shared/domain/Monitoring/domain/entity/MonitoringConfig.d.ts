export interface MonitoringServiceConfig {
	concurrencyLimit: number
	idleTimeMs: number
	startHour: number // Hora de inicio (0-23) en formato 24h
	endHour: number // Hora de fin (0-23) en formato 24h, exclusiva. Ej: 19 significa hasta las 18:59:59
	startDayOfWeek: number // Día de la semana de inicio (0=Domingo, 1=Lunes, ..., 6=Sábado)
	endDayOfWeek: number // Día de la semana de fin (0=Domingo, 1=Lunes, ..., 6=Sábado)
	disableTimeChecks?: boolean // Opcional: Si es true, ignora las restricciones de tiempo (útil para pruebas)
}

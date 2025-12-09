export interface PingResult {
	alive: boolean // Is the host reachable?
	time?: number // Round-trip time in milliseconds
	packetLoss?: number // Percentage of packets lost
	rawOutput: string // Original stdout for debugging if needed
	hostname?: string // Resolved hostname from ping output
}

/**
 * Interfaz que define el contrato para cualquier servicio de ping.
 * Esto permite la inyección de dependencias y facilita el intercambio de implementaciones.
 */
export interface IPingService {
	pingIp(params: { ipAddress: string; getHostName?: boolean }): Promise<PingResult>
}

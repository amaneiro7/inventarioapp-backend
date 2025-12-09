// src/types/net-ping.d.ts

declare module 'net-ping' {
	import { EventEmitter } from 'events'

	export class Session extends EventEmitter {
		pingHost(target: string, callback: (error: Error | null, target: string, sent: Date, rcvd: Date) => void): void
		close(): void
	}

	export class RequestTimedOutError extends Error {}

	interface SessionOptions {
		networkProtocol?: 'IPv4' | 'IPv6'
		packetSize?: number
		retries?: number
		sessionId?: number
		timeout?: number
		ttl?: number
	}

	export function createSession(options?: SessionOptions): Session
}

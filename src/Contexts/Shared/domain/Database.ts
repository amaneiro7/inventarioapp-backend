export interface Database {
	createConfig(): unknown
	connet(): Promise<void>
	close(): Promise<void>
}

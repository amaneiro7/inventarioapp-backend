export interface Database {
	createConfig(): any
	connet(): Promise<void>
	close(): Promise<void>
}

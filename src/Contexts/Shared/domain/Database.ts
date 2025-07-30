export interface Database {
	//createConfig(): unknown
	connect(): Promise<void>
	close(): Promise<void>
}

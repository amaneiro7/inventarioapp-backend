export type ResponseService<DTO> = {
	data: DTO[]
	info: {
		total: number
		page: number
		totalPage: number
	}
}
export type ResponseDB<DTO> = {
	data: DTO[]
	total: number
}

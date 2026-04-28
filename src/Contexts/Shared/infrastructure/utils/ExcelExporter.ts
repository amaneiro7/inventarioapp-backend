import fs from 'node:fs'
import { set_fs, utils, type WorkSheet, write } from 'xlsx'

export interface ExcelMetadata {
	title: string
	subject: string
	author?: string
}

/**
 * @description Helper para exportar conjuntos de datos a un buffer de Excel (XLSX).
 * Centraliza la lógica de formateo, metadatos y estilos de cabecera.
 */
export function exportToExcel<T extends object>(data: T[], metadata: ExcelMetadata): Buffer {
	set_fs(fs)

	// Caso: No hay datos
	if (!data.length) {
		const emptyWorkbook = utils.book_new()
		utils.book_append_sheet(emptyWorkbook, utils.aoa_to_sheet([['No hay datos para exportar']]), 'Inventario')
		return write(emptyWorkbook, { type: 'buffer', bookType: 'xlsx', compression: true })
	}

	const worksheet: WorkSheet = utils.json_to_sheet(data)

	// Optimización: Cálculo de anchos de columna automático basado en el contenido
	// Al usar T, TypeScript sabe que los headers vienen de las llaves del objeto
	const headers = Object.keys(data[0]) as Array<keyof T>
	const cols = headers.map(header => {
		const headerWidth = String(header).length + 2
		const maxContentWidth = data.reduce(
			(max, row) => Math.max(max, String(row[header] || '').length + 2),
			headerWidth
		)
		return { wch: maxContentWidth }
	})
	worksheet['!cols'] = cols

	const workbook = utils.book_new()
	workbook.Props = {
		Title: metadata.title,
		Subject: metadata.subject,
		Author: metadata.author ?? 'Sistema de Inventario (BNC)',
		CreatedDate: new Date()
	}

	// Estilización: Cabeceras en negrita y color de fondo suave
	const headerRow = utils.sheet_to_json(worksheet, { header: 1 })[0] as string[]
	headerRow.forEach((_header, index) => {
		const cellRef = utils.encode_cell({ r: 0, c: index })
		if (worksheet[cellRef]) {
			worksheet[cellRef].s = {
				font: { bold: true },
				fill: { fgColor: { rgb: 'E8F2FF' } }
			}
		}
	})

	utils.book_append_sheet(workbook, worksheet, 'Inventario')

	return write(workbook, {
		type: 'buffer',
		bookType: 'xlsx',
		compression: true
	})
}

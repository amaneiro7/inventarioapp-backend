/**
 * @file Defines constants for predefined category data, serving as a single source of truth.
 * This file consolidates scattered constants into a structured and manageable format.
 * @author Andres Maneiro
 */

/**
 * @constant CATEGORIES
 * @description An immutable array of all available categories with their core properties.
 * @type {Readonly<Array<{id: string, key: string, name: string}>>}
 */
export const CATEGORIES: Readonly<Array<{ id: string; key: string; name: string }>> = [
	{ id: '1', key: 'COMPUTADORAS', name: 'Computadoras' },
	{ id: '2', key: 'SERVIDORES', name: 'Servidores' },
	{ id: '3', key: 'LAPTOPS', name: 'Laptops' },
	{ id: '4', key: 'ALLINONE', name: 'All in One' },
	{ id: '5', key: 'MONITORES', name: 'Monitores' },
	{ id: '6', key: 'FINANCIERASPRINTER', name: 'Impresoras Financieras' },
	{ id: '7', key: 'LASERPRINTER', name: 'Impresoras Laser' },
	{ id: '8', key: 'INKPRINTER', name: 'Impresoras Tinta' },
	{ id: '9', key: 'HARDDRIVE', name: 'Discos Duros' },
	{ id: '10', key: 'KEYBOARD', name: 'Teclados' },
	{ id: '11', key: 'MOUSE', name: 'Mouses' },
	{ id: '12', key: 'BAM', name: 'BAMs' },
	{ id: '13', key: 'MFP', name: 'Impresoras Multifuncionales' },
	{ id: '14', key: 'PHONES', name: 'Celulares' },
	{ id: '15', key: 'SCANNER', name: 'Escaners' },
	{ id: '16', key: 'ANTENAS', name: 'Antenas' },
	{ id: '17', key: 'CABLEUSB', name: 'Cable USB' },
	{ id: '18', key: 'CAMARAS', name: 'Camaras' },
	{ id: '19', key: 'IPAD', name: 'IPAD' },
	{ id: '20', key: 'WEBCAM', name: 'WebCam' },
	{ id: '21', key: 'CORNETAS', name: 'Cornetas' },
	{ id: '22', key: 'DOCKING', name: 'Docking' },
	{ id: '23', key: 'LAPIZOPTICO', name: 'Lapiz Optico' },
	{ id: '24', key: 'CONVERTIDORVGAHDMI', name: 'Convertidor de VGA - HDMI' },
	{ id: '25', key: 'MIC', name: 'Micrófono' }
] as const

/**
 * @constant CategoryIds
 * @description A record mapping category keys to their corresponding IDs for quick lookups.
 * @example `CategoryIds.COMPUTADORAS` returns `'1'`.
 */
export const CategoryIds = Object.fromEntries(CATEGORIES.map(c => [c.key, c.id])) as Record<
	(typeof CATEGORIES)[number]['key'],
	(typeof CATEGORIES)[number]['id']
>

/**
 * @constant CategoryNames
 * @description A record mapping category keys to their corresponding display names.
 * @example `CategoryNames.COMPUTADORAS` returns `'Computadoras'`.
 */
export const CategoryNames = Object.fromEntries(CATEGORIES.map(c => [c.key, c.name])) as Record<
	(typeof CATEGORIES)[number]['key'],
	(typeof CATEGORIES)[number]['name']
>

/**
 * @constant CategoryDefaultData
 * @description A record mapping category IDs to their corresponding display names.
 * @example `CategoryDefaultData['1']` returns `'Computadoras'`.
 */
export const CategoryDefaultData = Object.fromEntries(CATEGORIES.map(c => [c.id, c.name])) as Record<
	(typeof CATEGORIES)[number]['id'],
	(typeof CATEGORIES)[number]['name']
>

/**
 * @type categoryValues
 * @description A union type representing all possible category ID values.
 */
export type categoryValues = (typeof CATEGORIES)[number]['id']

/**
 * @type CategoryNameValues
 * @description A union type representing all possible category name values.
 */
export type CategoryNameValues = (typeof CATEGORIES)[number]['name']

/**
 * @type CategoryKey
 * @description A union type representing all possible category key values.
 */
export type CategoryKey = (typeof CATEGORIES)[number]['key']

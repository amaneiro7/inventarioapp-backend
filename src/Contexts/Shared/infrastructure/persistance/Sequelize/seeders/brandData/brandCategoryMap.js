const { categoryOnlyNames } = require('../categoryData/categoryData')

/**
 * @description Mapa de relaciones entre Marcas y Categorías.
 * Aquí defines qué categorías pertenecen a cada marca.
 * El seeder buscará cada 'brandName'. Si no lo encuentra, lo creará.
 */
const brandCategoryMap = [
	// Marcas Principales de Cómputo
	{
		brandName: 'Hewlett-Packard',
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.SERVIDORES,
			categoryOnlyNames.ALLINONE,
			categoryOnlyNames.IMPRESORASLASER,
			categoryOnlyNames.IMPRESORASTINTA,
			categoryOnlyNames.MONITORES,
			categoryOnlyNames.CABLEUSB,
			categoryOnlyNames.DOCKING,
			categoryOnlyNames.LAPIZOPTICO,
			categoryOnlyNames.TECLADOS,
			categoryOnlyNames.MOUSE,
			categoryOnlyNames.MFP
		]
	},
	{
		brandName: 'Dell',
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.SERVIDORES,
			categoryOnlyNames.ALLINONE,
			categoryOnlyNames.MONITORES,
			categoryOnlyNames.TECLADOS
		]
	},
	{
		brandName: 'Lenovo',
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.SERVIDORES,
			categoryOnlyNames.ALLINONE,
			categoryOnlyNames.MONITORES,
			categoryOnlyNames.MOUSE,
			categoryOnlyNames.DOCKING,
			categoryOnlyNames.CONVERTIDORVGAHDMI,
			categoryOnlyNames.TECLADOS,
			categoryOnlyNames.CABLEUSB
		]
	},
	{
		brandName: 'Apple',
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.ALLINONE,
			categoryOnlyNames.MONITORES,
			categoryOnlyNames.IPAD,
			categoryOnlyNames.PHONE,
			categoryOnlyNames.TECLADOS,
			categoryOnlyNames.MOUSE
		]
	},
	{
		brandName: 'Asus',
		categories: [categoryOnlyNames.COMPUTADORAS, categoryOnlyNames.LAPTOPS, categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Acer',
		categories: [categoryOnlyNames.COMPUTADORAS, categoryOnlyNames.LAPTOPS, categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Microsoft',
		categories: [
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.IPAD,
			categoryOnlyNames.TECLADOS,
			categoryOnlyNames.MOUSE
		]
	},
	{
		brandName: 'Samsung',
		categories: [
			categoryOnlyNames.MONITORES,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.DISCOSDUROS,
			categoryOnlyNames.PHONE,
			categoryOnlyNames.IPAD
		]
	},
	{
		brandName: 'Sony',
		categories: [categoryOnlyNames.LAPTOPS, categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Toshiba',
		categories: [categoryOnlyNames.LAPTOPS, categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'Siragon',
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.LAPTOPS,
			categoryOnlyNames.ALLINONE,
			categoryOnlyNames.IPAD
		]
	},
	{
		brandName: 'Compaq', // Histórica, ahora parte de HP
		categories: [categoryOnlyNames.COMPUTADORAS, categoryOnlyNames.LAPTOPS]
	},

	// Marcas de Componentes
	{
		brandName: 'Intel',
		categories: []
	},
	{
		brandName: 'AMD',
		categories: []
	},
	{
		brandName: 'Nvidia',
		categories: []
	},
	{
		brandName: 'Seagate',
		categories: [categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'WesternDigital',
		categories: [categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'Kingston',
		categories: [categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'Hitachi',
		categories: [categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'HGST', // Parte de Western Digital
		categories: [categoryOnlyNames.DISCOSDUROS]
	},
	{
		brandName: 'Biostar Group',
		categories: [categoryOnlyNames.COMPUTADORAS]
	},
	{
		brandName: 'Foxconn',
		categories: [categoryOnlyNames.COMPUTADORAS]
	},

	// Marcas de Periféricos e Impresoras
	{
		brandName: 'Logitech',
		categories: [categoryOnlyNames.TECLADOS, categoryOnlyNames.MOUSE, categoryOnlyNames.WEBCAM]
	},
	{
		brandName: 'Genius',
		categories: [categoryOnlyNames.TECLADOS, categoryOnlyNames.MOUSE, categoryOnlyNames.WEBCAM]
	},
	{
		brandName: 'Epson',
		categories: [categoryOnlyNames.IMPRESORASTINTA, categoryOnlyNames.SCANNER]
	},
	{
		brandName: 'Lexmark',
		categories: [categoryOnlyNames.MFP]
	},
	{
		brandName: 'Wincor-Nixdorf',
		categories: [categoryOnlyNames.IMPRESORASFINANCIERAS]
	},
	{
		brandName: 'Diebold',
		categories: [categoryOnlyNames.IMPRESORASFINANCIERAS]
	},
	{
		brandName: 'Olivetti',
		categories: [categoryOnlyNames.IMPRESORASFINANCIERAS]
	},

	// Marcas de MONITORES
	{
		brandName: 'LG Electronics',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'AOC',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'BenQ',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'ViewSonic',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'NEC',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'I-INC',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Seiki',
		categories: [categoryOnlyNames.MONITORES]
	},

	// Marcas de Redes y Comunicaciones
	{
		brandName: 'Cisco',
		categories: []
	},
	{
		brandName: 'TP Link',
		categories: [categoryOnlyNames.BAM]
	},
	{
		brandName: 'Toto Link',
		categories: [categoryOnlyNames.BAM]
	},
	{
		brandName: 'ZTE',
		categories: [categoryOnlyNames.PHONE, categoryOnlyNames.BAM]
	},
	{
		brandName: 'HUAWEI',
		categories: [categoryOnlyNames.PHONE, categoryOnlyNames.LAPTOPS, categoryOnlyNames.IPAD, categoryOnlyNames.BAM]
	},
	{
		brandName: 'Alcatel',
		categories: [categoryOnlyNames.PHONE, categoryOnlyNames.BAM]
	},

	// Marcas de Móviles
	{
		brandName: 'Xiaomi',
		categories: [categoryOnlyNames.PHONE, categoryOnlyNames.IPAD, categoryOnlyNames.LAPTOPS]
	},
	{
		brandName: 'Nokia',
		categories: [categoryOnlyNames.PHONE]
	},
	{
		brandName: 'Motorola',
		categories: [categoryOnlyNames.PHONE]
	},

	// Otras Marcas
	{
		brandName: 'IBM',
		categories: [categoryOnlyNames.SERVIDORES]
	},
	{
		brandName: 'Unisys',
		categories: [categoryOnlyNames.SERVIDORES]
	},
	{
		brandName: 'Panasonic',
		categories: [categoryOnlyNames.LAPTOPS, categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Azulle',
		categories: [categoryOnlyNames.COMPUTADORAS]
	},
	{
		brandName: 'Haier',
		categories: [categoryOnlyNames.MONITORES]
	},
	{
		brandName: 'Targus',
		categories: []
	},
	{
		brandName: 'Gelsi', // Marca genérica o local
		categories: [categoryOnlyNames.BAM]
	},
	{
		brandName: 'Jio', // Marca de telecomunicaciones
		categories: [categoryOnlyNames.BAM]
	},
	{
		brandName: 'OEM', // Componentes genéricos
		categories: [
			categoryOnlyNames.COMPUTADORAS,
			categoryOnlyNames.ANTENAS,
			categoryOnlyNames.CABLEUSB,
			categoryOnlyNames.CAMARAS,
			categoryOnlyNames.CORNETAS,
			categoryOnlyNames.CAMARAS,
			categoryOnlyNames.MIC,
			categoryOnlyNames.MOUSE,
			categoryOnlyNames.WEBCAM
		]
	}
]

module.exports = { brandCategoryMap }

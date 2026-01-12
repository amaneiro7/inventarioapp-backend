export const CategoryDefault = {
	COMPUTERS: 'Computadoras',
	SERVERS: 'Servidores',
	LAPTOPS: 'Laptops',
	ALLINONE: 'All in One',
	MONITORS: 'Monitores',
	FINANTIALPRINTER: 'Impresoras Financieras',
	LASERPRINTER: 'Impresoras Laser',
	INKJETPRNTER: 'Impresoras Tinta',
	HARDDRIVE: 'Discos Duros',
	KEYBOARDS: 'Teclados',
	MOUSE: 'Mouses',
	BAM: 'BAMs',
	MFP: 'Impresoras Multifuncionales',
	PHONES: 'Celulares',
	SCANNER: 'Escaners',
	ANTENAS: 'Antenas',
	CABLEUSB: 'Cable USB',
	CAMARAS: 'Camaras',
	IPAD: 'IPAD',
	WEBCAM: 'Webcam',
	CORNETAS: 'Cornetas',
	DOCKING: 'Docking',
	LAPIZOPTICO: 'Lapiz Optico',
	CONVERTIDORVGAHDMI: 'Convertidor de VGA - HDMI',
	MIC: 'Micrófono'
} as const

export type CategoryDefaultValues = (typeof CategoryDefault)[keyof typeof CategoryDefault]

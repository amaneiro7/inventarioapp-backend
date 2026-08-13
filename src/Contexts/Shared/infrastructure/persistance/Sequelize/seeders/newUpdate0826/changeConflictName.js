const almacenes = {
	rosal: '09c84330-7170-48c4-aefe-48d49fe39afb',
	boleita: '09c84330-7170-48c4-aefe-48d49fe39afb'
}

const changeConflictNameToAlmacen = [
	{
		oldComputerName: '098236MEDPAG',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '095225ARCRED',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: 'A098028PROM1',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: 'A098048PROM3',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '095597COOPEMO',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: 'RRHHCOMP-BENEF',
		locationId: almacenes.rosal,
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	}
]

const chanceConflictNameToPorDesincorporar = [
	// Por desincorporar
	{
		oldComputerName: '011027CORDN',
		statusId: '3',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	}
]

module.exports = {
	changeConflictNameToAlmacen,
	chanceConflictNameToPorDesincorporar
}

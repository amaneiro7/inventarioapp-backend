const changeConflictNameToAlmacen = [
	{
		oldComputerName: '098236MEDPAG',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen Rosal
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: 'SALAPRESIDEN12',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen Rosal
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '098168MULTINAC',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '098298GTECOMP',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '098322CONYSER',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen
		statusId: '2',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '098166ASISTEJEC',
		locationId: '09c84330-7170-48c4-aefe-48d49fe39afb', //Almacen
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
	},
	{
		oldComputerName: '097000ASES',
		statusId: '3',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '209004PROMOT',
		statusId: '3',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	},
	{
		oldComputerName: '21301SUBGTE',
		statusId: '3',
		computerName: null,
		ipAddress: null,
		operatingSystemId: null,
		operatingSystemArqId: null
	}
]

const conflictNameToSwitchNames = [
	{
		oldComputerName: '30004PROM',
		computerName: '30003COOR1'
	},
	{
		oldComputerName: '30003COOR',
		computerName: '30004PROM'
	},
	{
		oldComputerName: '30003COOR1',
		computerName: '30003COOR'
	}
]

module.exports = {
	changeConflictNameToAlmacen,
	chanceConflictNameToPorDesincorporar,
	conflictNameToSwitchNames
}

const { hddCapacitiesName, hddCapacities } = require('../DiscoDuro/hddCapacities')

const newHDDUpdate = [
	{
		serial: 'MXL051085B',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXL3201WNM',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MJMMCFP',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXJ00503RW',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXJ00609M0',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXL0260WSN',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXL3200PPJ',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	}
]
module.exports = { newHDDUpdate }

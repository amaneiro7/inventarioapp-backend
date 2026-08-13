const { hddCapacitiesName, hddCapacities } = require('../DiscoDuro/hddCapacities')

const newHDDUpdate = [
	{
		serial: 'MXL4201N2L',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[250])[0].id
	},
	{
		serial: 'MJWDYP9',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MJ03JPR2',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MJ08H80P',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[1000])[0].id
	},
	{
		serial: 'MXL41801DY',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MJ04CSP7',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[1000])[0].id
	},
	{
		serial: 'MJ04HSVY',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXL41806XB',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[1000])[0].id
	},
	{
		serial: 'MXL41801R1',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[1000])[0].id
	},
	{
		serial: 'MXL9511PPB',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MJ04HSUJ',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[1000])[0].id
	},
	{
		serial: 'MJMLYBK',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	},
	{
		serial: 'MXL0260ZD9',
		hardDriveCapacityId: hddCapacities.filter(hdd => hdd.name === hddCapacitiesName[500])[0].id
	}
]
module.exports = { newHDDUpdate }

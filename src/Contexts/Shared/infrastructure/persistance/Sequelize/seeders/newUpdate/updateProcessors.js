const { processors } = require('../newDeviceData/processors')

const newUpdateProcessors = [
	{
		serial: 'MJHDHMZ',
		processorId: processors.find(process =>
			'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz'.includes(process.number_model)
		)?.id
	},
	{
		serial: 'MJMLYGA',
		processorId: processors.find(process => 'Intel(R) Core(TM) G630 CPU @ 2.70GHz'.includes(process.number_model))
			?.id
	},
	{
		serial: 'MXL850305Q',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8512DX4',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL85134SG',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8503D7J',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8521RCR',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8512F8C',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8512GZW',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL9010TTX',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL8512CZR',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	},
	{
		serial: 'MXL85215X1',
		processorId: '3a48933e-d75c-460c-ba5c-a7ebd3de7e43'
	}
]

module.exports = { newUpdateProcessors }

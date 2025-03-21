const { keyboardModel } = require('./keyboardModel')
const { almacenes: locations, almacenName } = require('../location/locations')

const keyboadAlmacen = [
	{
		serial: 'TH-07N124-37171-34J-5536',
		activo: '274',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'TH-07N124-37171-2C7-0494',
		activo: '276',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'TH-07N124-37171-2CC-0525',
		activo: '327',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'RT7D20')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'YB31C1U20488',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'GK-070006/U')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'GK-070006/U')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'GK-070006/U')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZM2320003827',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'GK-100016')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'GK-100016')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'GK-100016')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZM8502154179',
		activo: '191278',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZM8502154167',
		activo: '191292',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'WE9891086256',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZM8502154180',
		activo: '191281',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'K639')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'WE130VG14835',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'WE130VG14833',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-100011')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'ZCE961100676',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0138')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0138')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0138')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3310GVBW8JGV',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0CWZ',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH417',
		activo: 'AR001004735',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4C11T',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CBOACPTLUFL',
		activo: 'AR001002547',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUH7RO',
		activo: 'AR001006466',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0H2Z',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLRBB',
		activo: 'AR001001771',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY344N',
		activo: 'AR001010919',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8HO1',
		activo: 'AR001005582',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0F28',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW856O',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVBOVECY',
		activo: 'AR003000427',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU7FL1',
		activo: 'AR001004302',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BADU0KVBZS2YZ',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0DF1',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8HW7',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX375R',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC33700GVBW8JBS',
		activo: 'AR001005571',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW80FL',
		activo: 'AR001006532',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBVB1BGZ',
		activo: 'AR001005305',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVBZR50Q',
		activo: 'AR003001454',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3GM',
		activo: 'AR001011075',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY77JN',
		activo: 'AR001009688',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7FVQ',
		activo: 'AR001011149',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0ERJ',
		activo: 'AR001009828',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA29H',
		activo: 'AR001009639',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUH3LU',
		activo: 'AR001005034',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUI4TB',
		activo: 'AR001004924',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA86M',
		activo: 'AR001010714',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370CVBV19WY',
		activo: 'AR001005304',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8H6Z',
		activo: 'AR003001441',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8INW',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY78NY',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0ETA',
		activo: 'A003001882',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW48JJH',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUH6D6',
		activo: 'AR001005032',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HCQJ',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0FE1',
		activo: 'AR003001692',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC33170GVBW8JHO',
		activo: 'AR003001719',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BUAUDU0KBZS31H',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G20',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVW8CQF',
		activo: 'AR003001632',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370CVBV1A4E',
		activo: 'AR001004760',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX34OT',
		activo: 'AR003001864',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX28CR',
		activo: 'AR001008857',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUD0HVBY78NE',
		activo: 'AR001009657',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HCQL',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0CBA',
		activo: 'AR003001795',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVBZR519',
		activo: 'AR001006991',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370CVBV1A7Z',
		activo: 'AR001004767',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUI7G4',
		activo: 'AR001005449',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7FTC',
		activo: 'AR001011090',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBWT6T4',
		activo: 'AR003001502',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUH6JM',
		activo: 'AR001004510',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB216Z9',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVBZGAOD',
		activo: 'AR001011125',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZE8PF',
		activo: 'AR001010653',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY7AD7',
		activo: 'AR001010534',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BUAUDU0HVBY75UH',
		activo: 'AR001009633',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G232',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HCS6',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0FEQ',
		activo: 'AR001009892',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G4LM',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0D99',
		activo: 'AR003001423',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8ISL',
		activo: 'AR0003001754',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW80FG',
		activo: 'AR001005539',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G4HL',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVBZG8GQ',
		activo: 'AR001011764',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0GDL',
		activo: 'AR001009938',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW86N3',
		activo: 'AR001006627',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BUDU0HVBY0H3F',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G4HI',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93AB0LVBTY2DG',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA6M',
		activo: 'AR001010965',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0AS6',
		activo: 'AR003001794',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB2I4',
		activo: 'AR001010571',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX33IL',
		activo: 'AR001009924',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB0VEFD',
		activo: 'AR003000349',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0EX8',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA37U',
		activo: 'AR001010975',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBVU3T2',
		activo: 'AR001006056',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G1YG',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0ET1',
		activo: 'AR001009782',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUE60S',
		activo: 'AR003001233',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3JV',
		activo: 'AR001011018',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4I32B',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HF6P',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0FA7',
		activo: 'AR003001422',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBWT6YX',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBWT8W0',
		activo: 'AR003001606',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3KE',
		activo: 'AR001011098',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA5FY',
		activo: 'AR001010726',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBVU2CA',
		activo: 'AR001005815',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB2I71A',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0FMV',
		activo: 'AR001008556',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBVU3ST',
		activo: 'AR001006025',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8HUQ',
		activo: 'AR001006587',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA5EL',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX33L8',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVB0HC3H',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVB0M19Z',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G74W',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBW713X',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0C5H',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0EWU',
		activo: 'AR003001695',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8HV1',
		activo: 'AR003001857',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUHAVG',
		activo: 'AR001003588',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8JI4',
		activo: 'AR003001429',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3M0',
		activo: 'AR001010829',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ3K2',
		activo: 'AR001011107',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G1Z7',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBVU2BY',
		activo: 'AR001005765',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVBAD48T',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVB0M50A',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8JG2',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HFIA',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH0BF',
		activo: 'AR001004721',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH0F3',
		activo: 'AR001004808',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HFBB',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBVU23R',
		activo: 'AR001005758',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW83IN',
		activo: 'AR001006549',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH44L',
		activo: 'AR001005215',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH0CQ',
		activo: 'AR001005613',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4I3EJ',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY75OS',
		activo: 'AR001010981',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB0V8WW',
		activo: 'AR003000502',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8T26',
		activo: 'AR001006629',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370CVBV11J8',
		activo: 'AR001005265',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G71L',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB3U3NZ',
		activo: 'AR001005803',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BVBUH4L5',
		activo: 'AR001005339',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B29AB0LVBTY28N',
		activo: 'AR001009926',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBW8INT',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZE9D3',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7EEW',
		activo: 'AR001009618',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370FVBVU709',
		activo: 'AR003001758',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4I2ZD',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVB0M60D',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3DK',
		activo: 'AR001009612',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7EDQ',
		activo: 'AR001011059',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX28F7',
		activo: 'AR001008856',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX36L0',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX33QA',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HFI5',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G1YF',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7FT5',
		activo: 'AR001011503',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB0V985',
		activo: 'AR003000565',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7GPX',
		activo: 'AR001010523',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBWT9P7',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370BGAUI4TC',
		activo: 'AR001005439',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0OVB0VC3W',
		activo: 'AR003001226',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4C3O6',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7GPT',
		activo: 'AR001010541',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0KVB0ACOD',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370CVBV1980',
		activo: 'AR001005223',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB3NQ',
		activo: 'AR001010873',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4HF9U',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBX28EG',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7EE1',
		activo: 'AR001010545',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0ESE',
		activo: 'AR003001424',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7C1H',
		activo: 'AR003001612',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93AB0LVBTY2H1',
		activo: 'AR003001394',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0LVBTSFR7',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0Q5Y4G0BX',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370GVBWTEPG',
		activo: 'AR003001891',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBY0CTO',
		activo: 'AR003001575',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB2IB',
		activo: 'AR001010583',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZB2ID',
		activo: 'AR001010579',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0JVBZ7FVT',
		activo: 'AR001011082',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDAEV0QVB4F34I',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBYA9IT',
		activo: 'AR001010751',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B6A760JGAQV054',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0133')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0133')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0133')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAURM0MGA2P0L9',
		activo: 'AR001007751',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUHR0MGA2N1SM',
		activo: 'AR001000363',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUHR0MGA2N1VD',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUHR0MGA2N1SO',
		activo: 'AR001004696',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUHR0MGA2N1VO',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUHR0MVB3B3JD',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BAUDU0HVBZCGIZ',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BDALC0NVB3VASI',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3720DVBVL188',
		activo: 'AR001006862',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0316')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BCYST0AHH6P31Y',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'PR1101U')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'PR1101U')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'PR1101U')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BCYST0ACP7F7HR',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2085')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2085')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2085')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSUL88',
		activo: 'AR001000429',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU7IF5',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTV4P7',
		activo: 'AR001002594',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSSKCC',
		activo: 'AR001002235',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTV2YS',
		activo: 'AR001001779',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU7FHQ',
		activo: 'AR001004306',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ADPTGAC8',
		activo: 'AR001003696',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLVAX',
		activo: 'AR001001827',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0CPTLUBO',
		activo: 'AR001001815',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSOT8X',
		activo: 'AR001002318',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU7FL5',
		activo: 'AR001004471',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSUL9Q',
		activo: 'AR001000414',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSVXN1',
		activo: 'AR001002087',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSVW3W',
		activo: 'AR001001472',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ADPSW2TL',
		activo: 'AR001002060',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSVW7R',
		activo: 'AR001001044',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSUIBT',
		activo: 'AR001000480',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLW5R',
		activo: 'AR001003063',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPS0TB',
		activo: 'AR001002054',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU6GEW',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLUOF',
		activo: 'AR001002576',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSSEUH',
		activo: 'AR001002333',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLTES',
		activo: 'AR001002525',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLVCT',
		activo: 'AR001001785',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTIHW9',
		activo: 'AR001003691',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU26PE',
		activo: 'AR001004077',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ADPSW11V',
		activo: 'AR001000387',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93VB0ACPSUL8E',
		activo: 'AR001000348',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSULJI',
		activo: 'AR001000456',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPSG4B3',
		activo: '105967',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTLUAW',
		activo: 'AR001003129',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'B93CB0ACPTT2KS',
		activo: 'AR001001887',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BC3370ACPU7EG6',
		activo: 'AR001004240',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2880')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: 'BADGP0BDP5L9VT',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2885')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2885')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-2885')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1S89P83220131742B',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '429091',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '170907',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '382346',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '171238',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '109816',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '125854',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KB-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647449',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2098469',
		activo: '212631',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647440',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3363054',
		activo: '214191',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642498',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3354089',
		activo: '214177',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1S41A53123362847E',
		activo: '214185',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1S41A53122528146E',
		activo: '213747',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1S41A5312252523772E',
		activo: '213331',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3362866',
		activo: '214155',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642511',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523234',
		activo: '212803',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3354092',
		activo: '214163',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647024',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642487',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642524',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3358071',
		activo: '214188',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2104035',
		activo: '212637',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523414',
		activo: '213840',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5644664',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3359147',
		activo: '2432541',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523613',
		activo: '212660',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1019418',
		activo: '206631',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2525225',
		activo: '213767',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642507',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5644624',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2100462',
		activo: '211401',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642581',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2529334',
		activo: '213321',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5641192',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2529223',
		activo: '213841',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647443',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1011947',
		activo: '206605',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5645301',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642544',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '998444',
		activo: '207670',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523595',
		activo: '213291',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523820',
		activo: '213279',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647446',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523688',
		activo: '213309',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647470',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2532105',
		activo: '213335',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647916',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523586',
		activo: '213339',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2098318',
		activo: '212624',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642503',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523212',
		activo: '212775',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5644691',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2104374',
		activo: '212635',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '4037038',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2532126',
		activo: '213267',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2330308',
		activo: '213755',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3359265',
		activo: '214154',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5645299',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2782332',
		activo: '212563',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5644678',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5647459',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '4037071',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1019489',
		activo: '205671',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2529307',
		activo: '213337',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '5642536',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2523239',
		activo: '212811',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '3358041',
		activo: '214182',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1019542',
		activo: '206592',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-0225')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20538',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20545',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20552',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20543',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20532',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '20494',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KUF0452')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '40905571',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '40900787',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '40906748',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '40906516',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'LXH-EKB-10YA')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1375696',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2705393',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2709091',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '393934',
		activo: '207212',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1726811',
		activo: '207183',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '394660',
		activo: '207219',
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '604116',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1374549',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1375718',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1671831',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '605524',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1513405',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '605492',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '1672005',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2559468',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2709089',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '2709061',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '604094',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'SK-8825')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807660116',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807661934',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807661499',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807873470',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807662014',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807873471',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '65807660118',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === '1366')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	},
	{
		serial: '353201377352',
		activo: null,
		statusId: 2,
		categoryId: keyboardModel.filter(keyboard => keyboard.name === 'KU-1079')[0].categoryId,
		modelId: keyboardModel.filter(keyboard => keyboard.name === 'KU-1079')[0].id,
		brandId: keyboardModel.filter(keyboard => keyboard.name === 'KU-1079')[0].brandId,
		employeeId: null,
		locationId: locations.filter(location => location.name === almacenName.TORREBNC5DEJULIOALMACENPISO1)[0].id
	}
]

module.exports = { keyboadAlmacen }

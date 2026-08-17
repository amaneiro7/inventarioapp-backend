const { agenciaName, agenciasSite } = require('../location/locations')

function capitalCadena(cadena) {
	return cadena
		.toLowerCase()
		.split('. ')
		.map(text =>
			text
				.split(' ')
				.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
				.join(' ')
		)
		.join('. ')
}

/**
 * Función auxiliar para buscar IDs de forma segura y validar existencia
 */
function getSafeId(data, name, sourceName, originalName) {
	const found = data.find(item => item.name === name)
	if (!found) {
		console.error(`[ERROR SEEDER] No se encontró "${originalName}" en el archivo de ${sourceName}`)
		return null
	}
	return found
}

const rawData = [
	{
		userName: 'rmorantes',
		name: 'Ricardo Alfonzo',
		lastName: 'Morantes Punceles',
		employeeCode: null,
		nationality: 'V',
		cedula: 26367193,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		email: null
	},
	{
		userName: 'doliveira',
		name: 'Diveana Sharline',
		lastName: 'Oliveira Vera',
		employeeCode: null,
		nationality: 'V',
		cedula: 29551222,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		email: null
	},
	{
		userName: 'vrosales',
		name: 'Victor Roman',
		lastName: 'Rosales Sanchez',
		employeeCode: null,
		nationality: 'V',
		cedula: 27427991,
		locationId: agenciasSite.filter(location => location.name === agenciaName['ROSAL'])[0]?.id,
		email: null
	}
]

const nuevosUsuarios = rawData.map(user => {
	// const unidad = getSafeId(unidadCompleteUpdate, VPEOnlyNames[user.vpeKey], 'VPEData', user.vpeKey)
	// const cargo = getSafeId(cargosData, cargoOnlyNames[user.cargoKey], 'cargosData', user.cargoKey)

	return {
		userName: user.userName.trim().toLowerCase(),
		name: capitalCadena(user.name.trim()),
		lastName: capitalCadena(user.lastName.trim()),
		type: 'contractor',
		email: user.email ? `${user.email.trim().toLowerCase()}@bncenlinea.net` : null,
		isStillWorking: true,
		employeeCode: user.employeeCode,
		nationality: user.nationality,
		cedula: user.cedula,
		locationId: null,
		unidadID: null,
		cargoId: null,
		extension: [],
		phone: []
	}
})

console.log(nuevosUsuarios)

module.exports = { nuevosUsuarios }

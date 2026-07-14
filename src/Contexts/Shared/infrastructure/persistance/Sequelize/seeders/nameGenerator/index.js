const { generateAutomaticHostname } = require('./generateAutomaticHostname')
const { unidadList } = require('./lista')
const { SEDE } = require('./SEDES')

// console.log(generateAutomaticHostname(unidadList[0], SEDE.maracaibo, 1))
for (const unidad of unidadList) {
	console.log(generateAutomaticHostname(unidad, SEDE.maracaibo, 1))
}

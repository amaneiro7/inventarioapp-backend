
const { cargosData, cargoOnlyNames } = require('../employee/cargo/cargos')
const { unidadCompleteUpdate } = require('../newUpdate/unindadActualDuplicate')

function capitalCadena (cadena) {
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
function getSafeId (data, name, sourceName, originalName) {
    const found = data.find(item => item.name === name)
    if (!found) {
        console.error(`[ERROR SEEDER] No se encontró "${originalName}" en el archivo de ${sourceName}`)
        return null
    }
    return found
}

console.log(
    getSafeId(unidadCompleteUpdate, 'COORDINACIÓN CUMPLIMIENTO NORMATIVO', 'UnidadData', 'COORDINACIÓN CUMPLIMIENTO NORMATIVO')
)

const rawData = [
    // {
    //     userName: '',
    //     name: '',
    //     lastName: '',
    //     employeeCode: ,
    //     nationality: 'V',
    //     cedula: ,
    //     unidadKey: 'GERENCIA BANCA EN LÍNEA',
    //     cargoKey: 'TECNICO POS JUNIOR',
    //     locationId: agenciasSite.filter(location => location.name === agenciaName['AGENCIA(001)'])[0]?.id,
    //     email: 'hberroteran@bncenlinea.net'
    // },
]

const restoNuevosUsuarios = rawData.map(user => {
    const unidad = getSafeId(unidadCompleteUpdate, VPEOnlyNames[user.vpeKey], 'VPEData', user.vpeKey)
    const cargo = getSafeId(cargosData, cargoOnlyNames[user.cargoKey], 'cargosData', user.cargoKey)

    return {
        userName: user.userName.trim().toLowerCase(),
        name: capitalCadena(user.name.trim()),
        lastName: capitalCadena(user.lastName.trim()),
        type: 'regular',
        email: user.email.trim().toLowerCase(),
        isStillWorking: true,
        employeeCode: user.employeeCode,
        nationality: user.nationality,
        cedula: user.cedula,
        locationId: null,
        unidadID: vpe ? vpe.directivaId : null,
        cargoId: cargo ? cargo.id : null,
        extension: [],
        phone: []
    }
})

module.exports = { restoNuevosUsuarios }

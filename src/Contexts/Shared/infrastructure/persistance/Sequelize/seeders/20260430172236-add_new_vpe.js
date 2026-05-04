'use strict'

const { directivaData, directivaOnlyNames } = require('./employee/area/directiva')
const { VPEOnlyNames, VPEData } = require('./employee/area/vicepresidenciaEjecutiva')

const newVPESimple = [
	{
		id: 'c4003d5d-50a4-4f80-84b4-fc085c3b3a1a',
		name: 'V.P.E. Banca Corporativa Nacional',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	}
]
const newVPECompleja = [
	{
		id: 'a891947e-cafa-4a3c-84f9-b756e1021e59',
		name: 'V.P.E. Seguridad Corporativa y Prevención del Frau',
		directivaId: directivaData.filter(
			directiva => directiva.name === directivaOnlyNames['PRESIDENCIA EJECUTIVA']
		)[0].id
	}
]
const vpeToChangesToNewVPE = [
	{
		id: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P. SEGURIDAD DE LA INFORMACION'])[0].id,
		name: 'V.P. Seguridad de la informacion'
	},
	{
		id: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. GESTIÓN DE LA SEGURIDAD Y PREVENCIÓN'])[0].id,
		name: 'V.P.E. Gestión de la seguridad y prevención'
	}
]

const changeName = [
	{
		oldName: 'V.P.E. Operaciones centralizadas',
		newName: 'V.P.E. Operaciones y Administración'
	},
	{
		oldName: 'V.P.E. Banca Corporativa, Empresas e Instituciones',
		newName: 'V.P.E. Banca Corporativa Multinacional & Energía'
	}
]

const vpeToEliminate = [
	{
		id: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. BANCA ESPECIALIZADA'])[0].id
	},
	{
		id: VPEData.filter(vpe => vpe.name === VPEOnlyNames['V.P.E. DE BANCA CORPORATIVA'])[0].id
	},
	{
		id: '0a3f3706-7a54-493f-9d28-9027c3083f0a'
	}
]

const vpeTable = 'vicepresidencia_ejecutivas'
const now = new Date()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Primeros cambiamos los nombres
			console.log('--- Fase 1: Actualizando nombres de Vicepresidencias Ejecutivas existentes ---')
			for (const update of changeName) {
				console.log(`Updating name from ${update.oldName} to ${update.newName}`)
				await queryInterface.bulkUpdate(
					vpeTable,
					{
						name: update.newName,
						updated_at: now
					},
					{ name: update.oldName },
					{ transaction }
				)
			}
			// Luego agregamos el nuevo VPE simple
			console.log('--- Fase 2: Insertando nuevos registros VPE simples ---')
			await queryInterface.bulkInsert(
				vpeTable,
				newVPESimple.map(p => ({
					id: p.id,
					name: p.name,
					directiva_id: p.directivaId,
					created_at: now,
					updated_at: now
				})),
				{ transaction }
			)

			// Luego agregamos la vpe que requiere una fusion con otras vpe
			console.log('--- Fase 3: Creando nueva VPE para el proceso de fusión ---')
			const [nuevaVPE] = await queryInterface.bulkInsert(
				vpeTable,
				newVPECompleja.map(p => ({
					id: p.id,
					name: p.name,
					directiva_id: p.directivaId
				})),
				{ transaction, returning: true }
			)
			const nuevaId = nuevaVPE.id

			//Mover las Vicepresidencias hijas a la nueva entidad
			console.log(`--- Fase 4: Reasignando vicepresidencias hijas a la nueva VPE (ID: ${nuevaId}) ---`)
			await queryInterface.bulkUpdate(
				'vicepresidencias',
				{ vicepresidencia_ejecutiva_id: nuevaId },
				{ id: { [Sequelize.Op.in]: vpeToChangesToNewVPE.map(vpe => vpe.id) } },
				{ transaction }
			)

			// 4. Eliminar las entidades viejas
			// console.log('--- Fase 5: Eliminando entidades VPE obsoletas o fusionadas ---')
			// await queryInterface.bulkDelete('vicepresidencia_ejecutivas',
			// 	{ id: vpeToChangesToNewVPE.map(vpe => vpe.id) },
			// 	{ transaction }
			// )
			// await queryInterface.bulkDelete('vicepresidencia_ejecutivas',
			// 	{ id: vpeToEliminate.map(vpe => vpe.id) },
			// 	{ transaction }
			// )

			await transaction.commit()
			console.log('✅ Migración de Vicepresidencias Ejecutivas completada exitosamente.')
		} catch (error) {
			await transaction.rollback()
			console.error('Migration failed. Rolling back. Error:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		console.log('--- Revirtiendo cambios: Eliminando registros VPE creados ---')
		await queryInterface.bulkDelete(
			vpeTable,
			{
				id: { [Sequelize.Op.in]: newVPE.map(p => p.id) }
			},
			{}
		)
	}
}

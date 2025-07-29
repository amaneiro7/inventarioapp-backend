'use strict'
const { v4: uuidv4 } = require('crypto')

const dataModelProcesor = [
	// ... (tu data completa aquí)
	{ modelName: 'BYTE4', processorName: 'Intel(R) Celeron(R) J4125 CPU @ 2.00GHz' },
	{ modelName: 'G41D3C', processorName: 'Intel(R) Pentium(R) Dual-Core E5500 CPU @ 2.80GHz' },
	{ modelName: 'H61MLV', processorName: 'Intel(R) Core(TM) G630 CPU @ 2.70GHz' },
	{ modelName: 'HP 200 G1 MT', processorName: 'Intel(R) Celeron(R) J1800 CPU @ 2.41GHz' },
	{ modelName: 'HP All-in-One 24-df0xxx', processorName: 'AMD Athlon Silver 3050U CPU @ 2.30GHz' },
	{ modelName: 'HP All-in-One 24-df0xxx', processorName: 'AMD Ryzen 3 3250U CPU @ 2.60GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Core(TM) 2 Quad Q8400 CPU @ 2.66GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Pentium(R) Dual-Core E5300 CPU @ 2.60GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz' },
	{ modelName: 'HP Compaq 6000 Pro SFF PC', processorName: 'Intel(R) Celeron(R) J1800 CPU @ 2.41GHz' },
	{ modelName: 'HP Compaq 6200 Pro SFF PC', processorName: 'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz' },
	{ modelName: 'HP Compaq 6200 Pro SFF PC', processorName: 'Intel(R) Core(TM) i5 2400 CPU @ 3.10GHz' },
	{ modelName: 'HP Compaq 6200 Pro SFF PC', processorName: 'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz' },
	{ modelName: 'HP Compaq 8100 Elite CMT PC', processorName: 'Intel(R) Core(TM) i5 550 CPU @ 3.20GHz' },
	{ modelName: 'HP Compaq dc5700 Small Form Factor', processorName: 'Intel(R) Pentium(R) D 820 CPU @ 2.80GHz' },
	{ modelName: 'HP Compaq dc5700 Small Form Factor', processorName: 'Intel(R) Pentium(R) D 945 CPU @ 3.40GHz' },
	{ modelName: 'HP Compaq dc5700 Small Form Factor', processorName: 'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz' },
	{ modelName: 'HP Compaq dc5700 Small Form Factor', processorName: 'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'Intel(R) Core(TM) 2 Duo E7400 CPU @ 2.80GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'Intel(R) Core(TM) 2 Duo E7200 CPU @ 2.53GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'Intel(R) Core(TM) 2 Duo E4600 CPU @ 2.40GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'Intel(R) Pentium(R) Dual E2180 CPU @ 2.00GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'Intel(R) Pentium(R) Dual E2200 CPU @ 2.20GHz' },
	{ modelName: 'HP Compaq dc5800 Small Form Factor', processorName: 'AMD Athlon Silver 3050U CPU @ 2.30GHz' },
	{ modelName: 'HP Compaq dc7800p Small Form Factor', processorName: 'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz' },
	{ modelName: 'HP Compaq dx2300 Microtower', processorName: 'Intel(R) Pentium(R) 4 650 CPU @ 3.40GHz' },
	{ modelName: 'HP Compaq Elite 8000 SFF', processorName: 'Intel(R) Core(TM) 2 Duo E8400 CPU @ 3.00GHz' },
	{ modelName: 'HP Compaq Elite 8300 SFF', processorName: 'Intel(R) Core(TM) i5 3470 CPU @ 3.20GHz' },
	{ modelName: 'HP Compaq Pro 4300 SFF PC', processorName: 'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz' },
	{ modelName: 'HP Compaq Pro 4300 SFF PC', processorName: 'Intel(R) Core(TM) G640 CPU @ 2.80GHz' },
	{ modelName: 'HP Compaq Pro 6300 SFF', processorName: 'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz' },
	{ modelName: 'HP EliteBook 840 G8 Notebook PC', processorName: 'Intel(R) Core(TM) i7 1145G7 CPU @ 2.60GHz' },
	{ modelName: 'HP EliteBook 8470p', processorName: 'Intel(R) Core(TM) i5 3210M CPU @ 2.50GHz' },
	{ modelName: 'HP EliteBook 850 G7 Notebook PC', processorName: 'Intel(R) Core(TM) i7 10510U CPU @ 1.80GHz' },
	{ modelName: 'HP EliteBook x360 1030 G3', processorName: 'Intel(R) Core(TM) i7 8650U  CPU @ 1.90GHz' },
	{ modelName: 'HP EliteBook x360 830 G6', processorName: 'Intel(R) Core(TM) i7 8665U CPU @ 1.90GHz' },
	{ modelName: 'HP EliteDesk 800 G1 SFF', processorName: 'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz' },
	{ modelName: 'HP EliteDesk 800 G1 SFF', processorName: 'Intel(R) Core(TM) i7 4790 CPU @ 3.60GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 35W', processorName: 'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 35W (TAA)', processorName: 'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 35W (TAA)', processorName: 'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 35W (TAA)', processorName: 'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 65W (TAA)', processorName: 'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz' },
	{ modelName: 'HP EliteDesk 800 G4 DM 65W (TAA)', processorName: 'Intel(R) Core(TM) i7 8700T CPU @ 2.40GHz' },
	{ modelName: 'HP EliteDesk 800 G4 SFF', processorName: 'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz' },
	{ modelName: 'HP Laptop 15t dy200', processorName: 'Intel(R) Core(TM) i7 1165G7 CPU @ 2.80GHz' },
	{ modelName: 'HP Pavilion G4-1388la', processorName: 'Intel(R) Core(TM) i5 2450M CPU @ 2.50GHz' },
	{ modelName: 'HP Pavilion Laptop 15t-eg000', processorName: 'Intel(R) Core(TM) i7 1165G7 CPU @ 2.80GHz' },
	{ modelName: 'HP ProBook 4440s', processorName: 'Intel(R) Core(TM) i3 2370M CPU @ 2.40GHz' },
	{ modelName: 'HP ProBook 450 G8 Notebook PC', processorName: 'Intel(R) Core(TM) i7 1165G7 CPU @ 2.80GHz' },
	{ modelName: 'HP ProDesk 400 G1 SFF', processorName: 'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz' },
	{ modelName: 'HP ProDesk 600 G1 SFF', processorName: 'Intel(R) Core(TM) i5 4570 CPU @ 3.20GHz' },
	{ modelName: 'HP ProDesk 600 G1 SFF', processorName: 'Intel(R) Core(TM) i7 4770 CPU @ 3.40GHz' },
	{ modelName: 'HP ProDesk 600 G4 DM (TAA)', processorName: 'Intel(R) Core(TM) i5 8500T CPU @ 2.10GHz' },
	{ modelName: 'HP Z4 G4 Workstation', processorName: 'Intel(R) Xeon(R) W-2133 CPU @ 3.60GHz' },
	{ modelName: 'HP ZBook 15 G3', processorName: 'Intel(R) Core(TM) i7 6820HQ CPU @ 2.70GHz' },
	{ modelName: 'HP ZBook 15u G5', processorName: 'Intel(R) Core(TM) i7 8650U  CPU @ 1.90GHz' },
	{ modelName: 'Inspiron 3847', processorName: 'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz' },
	{ modelName: 'Latitude 5300 2-in-1', processorName: 'Intel(R) Core(TM) i5 8365U CPU @ 1.60GHz' },
	{ modelName: 'Lenovo C260', processorName: 'Intel(R) Celeron(R) J1800 CPU @ 2.41GHz' },
	{ modelName: 'Lenovo E49', processorName: 'Intel(R) Core(TM) i3 3110M CPU @ 2.40GHz' },
	{ modelName: 'Lenovo G480', processorName: 'Intel(R) Core(TM) i3 3120M CPU @ 2.50GHz' },
	{ modelName: 'Lenovo V330-14IKB', processorName: 'Intel(R) Core(TM) i7 8550U CPU @ 1.80GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Pentium(R) Dual-Core E2220 CPU @ 2.40GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Core(TM) i3 3240 CPU @ 3.40GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Celeron(R) G1610 CPU @ 2.60GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Core(TM) G620 CPU @ 2.60GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Core(TM) G630 CPU @ 2.70GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Celeron(R) 420 CPU @ 1.60GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Pentium(R) Dual E2180 CPU @ 2.00GHz' },
	{ modelName: 'OEM', processorName: 'Intel(R) Celeron(R) J4125 CPU @ 2.00GHz' },
	{ modelName: 'Presario C700 Notebook PC', processorName: 'Intel(R) Pentium(R) Dual T2330 CPU @ 1.6GHz' },
	{ modelName: 'ThinkCentre M57e', processorName: 'Intel(R) Pentium(R) Dual E2180 CPU @ 2.00GHz' },
	{ modelName: 'ThinkCentre M700', processorName: 'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz' },
	{ modelName: 'ThinkCentre M70e', processorName: 'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz' },
	{ modelName: 'ThinkCentre M70e', processorName: 'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz' },
	{ modelName: 'ThinkCentre M70e', processorName: 'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz' },
	{ modelName: 'ThinkCentre M710s', processorName: 'Intel(R) Core(TM) i7 7700 CPU @ 3.60GHz' },
	{ modelName: 'ThinkCentre M710S', processorName: 'Intel(R) Core(TM) i5 6400 CPU @ 2.70GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) G630 CPU @ 2.70GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i3 2100 CPU @ 3.10GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i5 2400 CPU @ 3.10GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i3 3120M CPU @ 2.50GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) i3 2130 CPU @ 3.40GHz' },
	{ modelName: 'ThinkCentre M71e', processorName: 'Intel(R) Core(TM) G620 CPU @ 2.60GHz' },
	{ modelName: 'ThinkCentre M720q', processorName: 'Intel(R) Core(TM) i5 8400T CPU @ 1.70GHz' },
	{ modelName: 'ThinkCentre M720s', processorName: 'Intel(R) Core(TM) i7 8700 CPU @ 3.20GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) i5 3470 CPU @ 3.20GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) i3 3220 CPU @ 3.30GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) i3 2120 CPU @ 3.30GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) i3 2130 CPU @ 3.40GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) 2 Duo E7500 CPU @ 2.93GHz' },
	{ modelName: 'ThinkCentre M72e', processorName: 'Intel(R) Core(TM) G620 CPU @ 2.60GHz' },
	{ modelName: 'ThinkCentre M73z', processorName: 'Intel(R) Core(TM) i5 4430S CPU @ 2.70GHz' },
	{ modelName: 'ThinkCentre M73z', processorName: 'Intel(R) Core(TM) i3 4150 CPU @ 3.50GHz' },
	{ modelName: 'ThinkCentre M73z', processorName: 'Intel(R) Core(TM) i5 4460 CPU @ 3.20GHz' },
	{ modelName: 'ThinkCentre M81', processorName: 'Intel(R) Core(TM) i5 2400 CPU @ 3.10GHz' },
	{ modelName: 'ThinkCentre M81', processorName: 'Intel(R) Core(TM) i7 2600 CPU @ 3.40GHz' },
	{ modelName: 'ThinkCentre M82', processorName: 'Intel(R) Core(TM) i5 3470 CPU @ 3.20GHz' },
	{ modelName: 'ThinkCentre M83', processorName: 'Intel(R) Core(TM) i5 4590 CPU @ 3.30GHz' },
	{ modelName: 'ThinkCentre M91p', processorName: 'Intel(R) Core(TM) i5 2400 CPU @ 3.10GHz' },
	{ modelName: 'ThinkPad Edge', processorName: 'Intel(R) Core(TM) i3 M380 CPU @ 2.53GHz' },
	{ modelName: 'ThinkPad L412', processorName: 'Intel(R) Core(TM) i5 M520 CPU @ 2.40GHz' },
	{ modelName: 'ThinkPad L412', processorName: 'Intel(R) Core(TM) i3 M380 CPU @ 2.53GHz' },
	{ modelName: 'ThinkPad SL400', processorName: 'Intel(R) Core(TM) 2 Duo T5670 CPU @ 1.80GHz' },
	{ modelName: 'ThinkPad SL410', processorName: 'Intel(R) Core(TM) 2 Duo T6670 CPU @ 2.20GHz' },
	{ modelName: 'ThinkPad T61', processorName: 'Intel(R) Core(TM) 2 Duo T1700 CPU @ 1.80GHz' },
	{ modelName: 'ThinkPad X1 Carbon 5th', processorName: 'Intel(R) Core(TM) i7 7600U CPU @ 2.80GHz' },
	{ modelName: 'ThinkPad X1 Carbon 7th', processorName: 'Intel(R) Core(TM) i7 8565U CPU @ 1.80GHz' },
	{ modelName: 'ThinkPad X230', processorName: 'Intel(R) Core(TM) i5 3210M CPU @ 2.50GHz' },
	{ modelName: 'ThinkPad X230', processorName: 'Intel(R) Core(TM) i5 3230M CPU @ 2.60GHz' },
	{ modelName: 'ThinkServer TS430', processorName: 'Intel(R) Xeon(R) E3-1230 V2 CPU @ 3.30GHz' },
	{ modelName: 'ThinkServer TS440', processorName: 'Intel(R) Xeon(R) E3-1225 v3 CPU @ 3.2GHz' }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const modelProcessorEntries = []

			for (const item of dataModelProcesor) {
				const { modelName, processorName } = item

				// Find model and processor in parallel for efficiency
				const [model, processor] = await Promise.all([
					queryInterface.sequelize.query('SELECT id FROM models WHERE name = :name', {
						replacements: { name: modelName },
						type: Sequelize.QueryTypes.SELECT,
						plain: true, // Return only the first row
						transaction
					}),
					queryInterface.sequelize.query('SELECT id FROM processors WHERE name = :name', {
						replacements: { name: processorName },
						type: Sequelize.QueryTypes.SELECT,
						plain: true, // Return only the first row
						transaction
					})
				])

				if (model && processor) {
					console.log(
						`Encontrado: Modelo '${modelName}' (ID: ${model.id}) y Procesador '${processorName}' (ID: ${processor.id})`
					)
					modelProcessorEntries.push({
						model_id: model.id,
						processor_id: processor.id,
						created_at: new Date(),
						updated_at: new Date()
					})
				} else {
					if (!model) {
						console.warn(`ADVERTENCIA: Modelo no encontrado, se omitirá la entrada: '${modelName}'`)
					}
					if (!processor) {
						console.warn(`ADVERTENCIA: Procesador no encontrado, se omitirá la entrada: '${processorName}'`)
					}
				}
			}

			if (modelProcessorEntries.length > 0) {
				await queryInterface.bulkInsert('model_processor', modelProcessorEntries, { transaction })
				console.log(`Se insertaron ${modelProcessorEntries.length} relaciones en la tabla model_processor.`)
			} else {
				console.log('No se encontraron nuevas relaciones para insertar.')
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error('Error en el seeder de model_processor:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Reverts the seeder by deleting all entries from the model_processor table.
		 */
		await queryInterface.bulkDelete('model_processor', null, {})
	}
}

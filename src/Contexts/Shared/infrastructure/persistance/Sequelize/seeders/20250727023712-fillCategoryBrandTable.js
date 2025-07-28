'use strict'
const { randomUUID } = require('crypto') // Usamos crypto para generar UUIDs seguros
const { brandCategoryMap } = require('./brandData/brandCategoryMap')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const categoryBrandEntries = []

			for (const item of brandCategoryMap) {
				const { brandName, categories } = item
				let brandId

				// 1. Buscar la marca por nombre
				const brands = await queryInterface.sequelize.query('SELECT id FROM brands WHERE name = :name', {
					replacements: { name: brandName },
					type: Sequelize.QueryTypes.SELECT,
					transaction
				})

				if (brands.length > 0) {
					// 2a. Si la marca existe, usar su ID
					brandId = brands[0].id
					console.log(`Marca encontrada: ${brandName} (ID: ${brandId})`)
				} else {
					// 2b. Si la marca no existe, crearla
					brandId = randomUUID()
					await queryInterface.bulkInsert(
						'brands',
						[
							{
								id: brandId,
								name: brandName,
								created_at: new Date(),
								updated_at: new Date()
							}
						],
						{ transaction }
					)
					console.log(`Marca creada: ${brandName} (ID: ${brandId})`)
				}

				// 3. Preparar las entradas para la tabla de unión
				for (const categoryId of categories) {
					categoryBrandEntries.push({
						brand_id: brandId,
						category_id: categoryId,
						created_at: new Date(),
						updated_at: new Date()
					})
				}
			}

			// 4. Insertar todas las relaciones en la tabla de unión
			if (categoryBrandEntries.length > 0) {
				await queryInterface.bulkInsert('category_brand', categoryBrandEntries, { transaction })
				console.log(`Se insertaron ${categoryBrandEntries.length} relaciones en la tabla category_brand.`)
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			console.error('Error en el seeder de category_brand:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * El método 'down' eliminará todas las entradas de la tabla de unión.
		 * No elimina las marcas que se hayan podido crear, ya que podrían estar en uso.
		 * Esto es generalmente un enfoque más seguro para la reversión de seeders.
		 */
		await queryInterface.bulkDelete('category_brand', null, {})
	}
}

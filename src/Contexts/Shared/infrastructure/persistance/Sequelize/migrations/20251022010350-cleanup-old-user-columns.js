'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Remove old columns that are no longer needed
			await queryInterface.removeColumn('users', 'name', { transaction })
			await queryInterface.removeColumn('users', 'last_name', { transaction })
			await queryInterface.removeColumn('users', 'email', { transaction })
			await queryInterface.removeColumn('users', 'user_secret', { transaction })

			// 2. Now that the data is migrated, enforce the NOT NULL constraint on employee_id
			// We will also add a unique constraint to it.
			await queryInterface.changeColumn(
				'users',
				'employee_id',
				{
					type: Sequelize.UUID,
					allowNull: false,
					unique: true
				},
				{ transaction }
			)

			await transaction.commit()
		} catch (err) {
			await transaction.rollback()
			throw err
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Add back the old columns
			await queryInterface.addColumn(
				'users',
				'name',
				{
					type: Sequelize.STRING,
					allowNull: true
				},
				{ transaction }
			)
			await queryInterface.addColumn(
				'users',
				'last_name',
				{
					type: Sequelize.STRING,
					allowNull: true
				},
				{ transaction }
			)
			await queryInterface.addColumn(
				'users',
				'email',
				{
					type: Sequelize.STRING,
					allowNull: true,
					unique: true
				},
				{ transaction }
			)
			await queryInterface.addColumn(
				'users',
				'user_secret',
				{
					type: Sequelize.STRING,
					allowNull: true
				},
				{ transaction }
			)

			// 2. Revert the change to employee_id
			await queryInterface.changeColumn(
				'users',
				'employee_id',
				{
					type: Sequelize.UUID,
					allowNull: true, // Allow nulls again
					unique: false // Remove unique constraint if it was added
				},
				{ transaction }
			)

			await transaction.commit()
		} catch (err) {
			await transaction.rollback()
			throw err
		}
	}
}

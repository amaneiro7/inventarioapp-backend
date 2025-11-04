'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.addColumn(
				'users',
				'last_login_ip',
				{
					type: Sequelize.INET,
					allowNull: true,
					defaultValue: null
				},
				{ transaction }
			)

			// The removal of old columns will be done in a separate, later migration
			// after the seeder has run successfully.

			await transaction.commit()
		} catch (err) {
			await transaction.rollback()
			throw err
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// Revert the changes: remove the new columns

			await queryInterface.removeColumn('users', 'last_login_ip', { transaction })

			// The old columns ('name', 'last_name', 'email', 'user_secret') were not removed in the 'up'
			// function of this migration, so there is no need to add them back here.
			// The 'down' function of the *next* migration will be responsible for adding them back.

			await transaction.commit()
		} catch (err) {
			await transaction.rollback()
			throw err
		}
	}
}

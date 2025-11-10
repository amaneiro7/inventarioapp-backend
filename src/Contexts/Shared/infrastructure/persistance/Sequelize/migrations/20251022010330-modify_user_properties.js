'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			// 1. Add new columns
			await queryInterface.addColumn(
				'users',
				'employee_id',
				{
					type: Sequelize.UUID,
					allowNull: true, // Set to true temporarily to allow existing rows to be updated
					references: {
						model: 'employees',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				},
				{ transaction }
			)

			await queryInterface.addColumn(
				'users',
				'status',
				{
					type: Sequelize.ENUM('ACTIVE', 'LOCKED', 'SUSPENDED'),
					allowNull: false,
					defaultValue: 'ACTIVE'
				},
				{ transaction }
			)

			await queryInterface.addColumn(
				'users',
				'password_change_at',
				{
					type: Sequelize.DATE,
					allowNull: true,
					defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
				},
				{ transaction }
			)
			await queryInterface.addColumn(
				'users',
				'password_never_expires',
				{
					type: Sequelize.BOOLEAN,
					allowNull: false,
					defaultValue: false
				},
				{ transaction }
			)

			await queryInterface.addColumn(
				'users',
				'last_login_at',
				{
					type: Sequelize.DATE,
					defaultValue: null,
					allowNull: true
				},
				{ transaction }
			)
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

			await queryInterface.addColumn(
				'users',
				'failed_attemps',
				{
					type: Sequelize.INTEGER,
					allowNull: false,
					defaultValue: 0
				},
				{ transaction }
			)

			await queryInterface.addColumn(
				'users',
				'lockout_until',
				{
					type: Sequelize.DATE,
					allowNull: true
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
			await queryInterface.removeColumn('users', 'employee_id', { transaction })
			await queryInterface.removeColumn('users', 'status', { transaction })
			await queryInterface.removeColumn('users', 'password_change_at', { transaction })
			await queryInterface.removeColumn('users', 'password_never_expires', { transaction })
			await queryInterface.removeColumn('users', 'last_login_at', { transaction })
			await queryInterface.removeColumn('users', 'last_login_ip', { transaction })
			await queryInterface.removeColumn('users', 'failed_attemps', { transaction })
			await queryInterface.removeColumn('users', 'lockout_until', { transaction })

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

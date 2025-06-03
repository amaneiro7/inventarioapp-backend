'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('locations', 'location_status_id', {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'location_status',
        key: 'id'
      },
      defaultValue: '1',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('locations', 'location_status_id')
  }
}

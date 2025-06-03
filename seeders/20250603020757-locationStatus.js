'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('location_status', [
      { id: '1', name: 'Operativa' },
      { id: '2', name: 'Cerrado temporalmente' },
      { id: '3', name: 'cerrado permanentemente' },
      { id: '4', name: 'Cierre programado' },
      { id: '5', name: 'En construcción' },
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('location_status', {
      id: {
        [Sequelize.Op.in]: ['1', '2', '3', '4', '5']
      }
    })
  }
}

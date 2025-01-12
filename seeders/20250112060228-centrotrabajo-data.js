'use strict';

const { centroTrabajoData } = require('./employee/area/centroTrabajo');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('centro_trabajos', centroTrabajoData.map(({ id, name, centroCostoId }) => ({
      id,
      name,
      centro_costo_id: centroCostoId,
      created_at: new Date(),
      updated_at: new Date()
    })))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('centro_trabajos', null, {})
  }
};

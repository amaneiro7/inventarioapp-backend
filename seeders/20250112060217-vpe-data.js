'use strict';

const { VPEData } = require('./employee/area/vicepresidenciaEjecutiva');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vicepresidencia_ejecutivas', VPEData.map(({ id, name, directivaId }) => ({
      id,
      name,
      directiva_id: directivaId,
      created_at: new Date(),
      updated_at: new Date()
    })))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vicepresidencia_ejecutivas', null, {})
  }
};

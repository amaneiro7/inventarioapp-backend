'use strict';

const { directivaData } = require('./employee/area/directiva');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('directivas', directivaData.map(({ id, name }) => ({
      id,
      name,
      created_at: new Date(),
      updated_at: new Date()
    })))
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('directivas', null, {})
  }
};

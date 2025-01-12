'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable("coordinacions")
    await queryInterface.dropTable("gerencia")
    await queryInterface.dropTable("vicepresidencia")
    await queryInterface.dropTable("vicepresidencia_ejecutivas")
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('device_monitorings', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      device_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'devices',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      status: {
        type: Sequelize.ENUM('online', 'offline', 'not available'),
        allowNull: false,
        defaultValue: 'not available'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      last_scan: {
        tyep: Sequelize.DATE,
        allowNull: true
      },
      last_success: {
        tyep: Sequelize.DATE,
        allowNull: true
      },
      last_failed: {
        tyep: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('device_monitorings')
  }
};

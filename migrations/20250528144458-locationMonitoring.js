'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('location_monitorings', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      location_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: 'locations',
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
      last_scan: {
        type: Sequelize.DATE,
        allowNull: true
      },
      last_success: {
        type: Sequelize.DATE,
        allowNull: true
      },
      last_failed: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('location_monitorings')
  }
};

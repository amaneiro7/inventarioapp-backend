'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('employees', 'type', {
      type: Sequelize.ENUM('generic', 'regular', 'service'),
      allowNull: false,
      defaultValue: 'regular'
    })
    await queryInterface.addColumn("employees", "name", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
    await queryInterface.addColumn("employees", "last_name", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
    await queryInterface.addColumn("employees", "email", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
    await queryInterface.addColumn("employees", "is_still_working", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    })
    await queryInterface.addColumn("employees", "employee_code", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
      defaultValue: null
    })
    await queryInterface.addColumn('employees', 'nationality', {
      type: Sequelize.ENUM('V', 'E',),
      allowNull: true,
      defaultValue: null
    })
    await queryInterface.addColumn("employees", "cedula", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: true,
      defaultValue: null
    })
    await queryInterface.addColumn('employees', 'centro_trabajo_id', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'centro_trabajos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    await queryInterface.addColumn('employees', 'location_id', {
      type: Sequelize.UUID,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'locations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryInterface.addColumn('employees', 'departamento_id', {
      type: Sequelize.UUID,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'departamentos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryInterface.addColumn('employees', 'cargo_id', {
      type: Sequelize.UUID,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'cargos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    await queryInterface.addColumn('employees', 'extension', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    })
    await queryInterface.addColumn('employees', 'phone', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('employees', 'type')
    await queryInterface.removeColumn('employees', 'name')
    await queryInterface.removeColumn('employees', 'last_name')
    await queryInterface.removeColumn('employees', 'email')
    await queryInterface.removeColumn('employees', 'is_still_working')
    await queryInterface.removeColumn('employees', 'employee_code')
    await queryInterface.removeColumn('employees', 'nationality')
    await queryInterface.removeColumn('employees', 'cedula')
    await queryInterface.removeColumn('employees', 'centro_trabajo_id')
    await queryInterface.removeColumn('employees', 'location_id')
    await queryInterface.removeColumn('employees', 'departamento_id')
    await queryInterface.removeColumn('employees', 'cargo_id')
    await queryInterface.removeColumn('employees', 'extension')
    await queryInterface.removeColumn('employees', 'phone')
  }
};

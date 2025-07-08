'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query("ALTER TYPE \"enum_device_monitorings_status\" ADD VALUE 'hostname mismatch'")
  },

  async down (queryInterface, Sequelize) {
    // No se puede eliminar un valor de un enum en PostgreSQL, por lo que el rollback es complejo.
    // Una opción es crear un nuevo tipo enum sin el valor y reemplazar el antiguo,
    // pero esto puede ser destructivo si hay datos que usan otros valores del enum.
    // Por simplicidad, dejaremos el down vacío, aceptando que el nuevo valor permanecerá.
    console.log('No se puede revertir la adición de un valor a un ENUM de forma segura.')
  }
}
'use strict';

const { updateEmployees_Agencia } = require('./employee/newDataEmployeeRes');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (const employee of updateEmployees_Agencia) {
      employee.phone = Sequelize.literal(`ARRAY[]::VARCHAR[]`)
      employee.extension = Sequelize.literal(`ARRAY[]::VARCHAR[]`)
      const existingEmployee = await queryInterface.rawSelect('employees', {
        where: {
          user_name: {
            [Sequelize.Op.iLike]: `${employee.userName}`,
          }
        },
      }, ['id'])

      if (existingEmployee) {
        await queryInterface.bulkUpdate('employees', {
          user_name: employee.userName.toLowerCase(),
          name: employee.name,
          last_name: employee.lastName,
          type: employee.type,
          email: employee.email,
          is_still_working: employee.isStillWorking,
          employee_code: employee.employeeCode,
          nationality: employee.nationality,
          cedula: employee.cedula,
          centro_trabajo_id: employee.centroTrabajoId,
          location_id: employee.locationId,
          departamento_id: employee.departamentoId,
          cargo_id: employee.cargoId,
          extension: employee.extension,
          phone: employee.phone
        }, {
          id: existingEmployee
        })
      } else {
        const id = crypto.randomUUID()
        await queryInterface.bulkInsert('employees', [{
          id,
          user_name: employee.userName,
          name: employee.name,
          last_name: employee.lastName,
          type: employee.type,
          email: employee.email,
          is_still_working: employee.isStillWorking,
          employee_code: employee.employeeCode,
          nationality: employee.nationality,
          cedula: employee.cedula,
          centro_trabajo_id: employee.centroTrabajoId,
          location_id: employee.locationId,
          departamento_id: employee.departamentoId,
          cargo_id: employee.cargoId,
          extension: employee.extension,
          phone: employee.phone,
          created_at: new Date(),
          updated_at: new Date()
        }])
      }
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

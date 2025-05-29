'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Primero, consulta los datos necesarios de la tabla 'computers'
    const computers = await queryInterface.sequelize.query(
      `SELECT
         id AS device_id
       FROM device_computers`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Mapea los resultados para que coincidan con la estructura de device_monitorings
    const deviceMonitoringsData = computers.map(computer => ({
      id: computer.device_id,
      device_id: computer.device_id, // Asume que 'device_id' en device_monitorings se refiere al ID de la computadora      
      status: 'not available', // Estado inicial desconocido
      last_scan: null,
      last_success: null,
      last_failed: null,
      created_at: new Date(),
      updated_at: new Date()
    }));

    // Inserta los datos en la tabla 'device_monitorings'
    if (deviceMonitoringsData.length > 0) {
      await queryInterface.bulkInsert('device_monitorings', deviceMonitoringsData, {});
      console.log(`Se insertaron ${deviceMonitoringsData.length} registros en 'device_monitorings'.`);
    } else {
      console.log('No se encontraron computadoras con dirección IP para seedear en "device_monitorings".');
    }
  },

  async down (queryInterface, Sequelize) {
    // Al hacer 'down', normalmente querrías revertir lo que se hizo en 'up'.
    // Aquí puedes eliminar los registros que se insertaron basándote en un criterio,
    // o simplemente limpiar la tabla si este seed es para una inicialización completa.

    // Opción 1: Eliminar solo los registros que correspondan a las computadoras que se agregaron.
    // Esto sería complejo sin un campo que los identifique claramente como parte de este seed.
    // Una alternativa es obtener los IDs de las computadoras nuevamente y eliminarlos.
    const computers = await queryInterface.sequelize.query(
      `SELECT id FROM device_computers;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const computerIds = computers.map(c => c.id);

    if (computerIds.length > 0) {
      await queryInterface.bulkDelete('device_monitorings', {
        device_id: {
          [Sequelize.Op.in]: computerIds
        }
      }, {});
      console.log(`Se eliminaron ${computerIds.length} registros de 'device_monitorings' relacionados con computadoras con IP.`);
    } else {
      console.log('No hay registros de computadoras con IP para eliminar de "device_monitorings".');
    }

    // Opción 2 (Más drástica, si el seed siempre limpia la tabla):
    // await queryInterface.bulkDelete('device_monitorings', null, {});
    // console.log('Se eliminaron todos los registros de "device_monitorings".');
  }
};

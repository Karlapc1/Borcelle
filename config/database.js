// const { Sequelize } = require('sequelize'); 
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,      // Agrega esta línea si necesitas el puerto
//     dialect: process.env.DB_DIALECT,
//   }
// );

// module.exports = sequelize;


require('dotenv').config(); // Asegúrate de requerir dotenv

const { Sequelize } = require('sequelize');

// Configuración de Sequelize con las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario de la base de datos
  process.env.DB_PASS,      // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,  // Host de la base de datos
    dialect: 'mysql',           // El dialecto de la base de datos (mysql en este caso)
    port: process.env.DB_PORT,  // Puerto de la base de datos (usualmente 3306 para MySQL)
    logging: false              // Desactiva el logging si no lo necesitas
  }
);

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Exportar la instancia de Sequelize para su uso en otras partes del proyecto
module.exports = sequelize;

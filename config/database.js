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

  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Conexión a la base de datos exitosa');
    })
    .catch(err => {
      console.error('Error al conectar a la base de datos:', err);
    });

  module.exports = sequelize;
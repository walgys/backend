const mysqlConn = require('./connectDB');

const queryInsertUsuario = async (usuario) => {
  const conn = await mysqlConn.getConnection();
  const { nombre, apellido } = usuario;
  try {
    const result = await conn.execute(
      'INSERT INTO `usuarios` (nombre,apellido}) VALUES (?,?)',
      [nombre, apellido]
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    conn.removeAllListeners();
    conn.release();
  }
};

module.exports = { queryGetUsuarios, queryInsertUsuario };

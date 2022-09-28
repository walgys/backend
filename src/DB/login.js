const mysqlConn = require('./connectDB');

const queryLogin = async (usuario) => {
  const conn = await mysqlConn.getConnection();
  const { nombre } = usuario;
  try {
    const [rows, fields] = await conn
      .execute('SELECT * FROM usuarios WHERE nombre=?', nombre)
      .then((results) => {
        return results;
      })
      .catch((err) => {
        console.log(err);
      });
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    conn.removeAllListeners();
    conn.release();
  }
};

module.exports = { queryLogin };

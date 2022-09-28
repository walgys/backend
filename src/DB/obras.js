const mysqlConn = require('./connectDB');

const queryGetObras = async () => {
  const conn = await mysqlConn.getConnection();
  try {
    const sql = `SELECT * FROM obra`;
    const [rows, fields] = await conn
      .execute(sql)
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

const queryInsertObra = async (obra) => {
  const conn = await mysqlConn.getConnection();
  const { nombre, tipo } = obra;
  try {
    const result = await conn.execute(
      'INSERT INTO `obra` (nombre,tipo}) VALUES (?,?)',
      [nombre, tipo]
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    conn.removeAllListeners();
    conn.release();
  }
};

module.exports = { queryGetObras, queryInsertObra };

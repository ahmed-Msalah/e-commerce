const mongoose = require('mongoose');
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const dbConnection = () => {
  mongoose.connect(db).then((conn) => {
    console.log(`Database Connected: ${conn.connection.host}`);
  });
  // .catch((err) => {
  //   console.error(`Database Error: ${err}`);
  //   process.exit(1);
  // });
};

module.exports = dbConnection;

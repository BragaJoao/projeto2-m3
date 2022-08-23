const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) => console.log(`Erro ao conectar com o MongoDb, erro: ${error}`));
};

module.exports = connectToDatabase;

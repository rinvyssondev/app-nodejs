const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.0p7whwy.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu erro ao se conectar com o banco", error);
      }
      return console.log("Conexao ao banco realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;

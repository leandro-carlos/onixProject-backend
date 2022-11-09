import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://leandrodev:irUzqVxAJD1x0bnf@database-onix.lpcbvmh.mongodb.net/database-onix?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexão estabelicda com o mongo com sucesso"))
  .catch((err) => console.log("Erro ao se conectar com o mongoDB: " + err));

let db = mongoose.connection;

export default db;

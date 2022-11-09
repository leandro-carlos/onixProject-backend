import mongoose from "mongoose";

const code = new mongoose.Schema({
  id: { type: String },
  code: { type: String, require: true },
  message: { type: String, require: true },
});

const codigos = mongoose.model("erros-codes", code);

export default codigos;

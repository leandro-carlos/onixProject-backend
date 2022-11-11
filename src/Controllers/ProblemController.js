import { json } from "express";
import codigos from "../models/Code.js";

class ProblemController {
  constructor() {
    this.getSingleCode = this.getSingleCode.bind(this);
    this.insertCode = this.insertCode.bind(this);
  }

  static getCode = (req, res) => {
    codigos.find((err, codigos) => {
      res.status(200).json({
        message: "mostrando todos os dados do usuarios",
        codigos,
      });
    });
  };

  async getSingleCode(req, res) {
    let code = req.params.id;
    const singleCode = await codigos.findOne({ code });
    return res.status(200).json(singleCode);
  }

  async insertCode(req, res) {
    let codigo = new codigos(req.body);

    codigo.save((error) => {
      if (error) {
        console.log("Deu erro " + error);
      } else {
        res.send(codigo);
      }
    });
  }
}
export default ProblemController;

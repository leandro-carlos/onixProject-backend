import { json } from "express";
import codigos from "../models/Code.js";

class ProblemController {
  static getCode = (req, res) => {
    codigos.find((err, codigos) => {
      res.status(200).json({
        message: "mostrando todos os dados do usuarios",
        codigos,
      });
    });
  };

  static getSingleCode = (req, res) => {
    let id = req.params.id;
    codigos.findOne();
  };

  static insertCode = (req, res) => {
    let codigo = new codigos(req.body);

    codigo.save((error) => {
      if (error) {
        console.log("Deu erro " + error);
      } else {
        res.send(codigo);
      }
    });
  };
}
export default ProblemController;

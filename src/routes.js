import { Router } from "express";
import ProblemController from "./Controllers/ProblemController.js";

const controller = new ProblemController();
const routes = new Router();

routes.get("/getCode", ProblemController.getCode);
routes.get("/getSingleCode/:id", controller.getSingleCode);
routes.post("/insertACode", controller.insertCode);

export default routes;

import { Router } from "express";
import ProblemController from "./Controllers/ProblemController.js";

const routes = new Router();

routes.get("/getCode", ProblemController.getCode);
routes.get("/getSingleCode/:id", ProblemController.getSingleCode);
routes.post("/insertACode", ProblemController.insertCode);

export default routes;

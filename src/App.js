import Express from "express";
import routes from "./routes.js";
import connectTO from "./Config/Connection.js";

const app = Express();

app.use(Express.json());
app.use(routes);

export default app;

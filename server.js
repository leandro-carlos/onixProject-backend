import app from "./src/App.js";

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`backend rodando na porta ${PORT}`);
});

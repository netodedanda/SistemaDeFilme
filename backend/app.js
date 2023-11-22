import express from "express";
import router from "./routes/Routes.js";
import db from "./db/db.js";
import cors from 'cors';

const app = express();

app.use(cors());

db
    .sync()
    .then(() => {
        console.log("Conectado ao banco de dados!\u{1F680}");
    })
    .catch((error) => {
        console.log(error);
    });

app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 5151;

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}!\u{1F525}\u{1F525}`);
});



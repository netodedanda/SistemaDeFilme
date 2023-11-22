import { Router } from "express";
import FilmeController from "../controllers/FilmeController.js";

const router = Router();

router.get("/filmes", FilmeController.index);
router.get("/filme/:id", FilmeController.searchId);

router.post("/filme/create", FilmeController.create);
router.put("/filme/update/:id", FilmeController.update);
router.delete("/filme/delete/:id", FilmeController.delete);

export default router;
import model from "../db/model.js";

class FilmeController {

    async index(req, res) {
        try {
            const filmes = await model.findAll();
            return res.json(filmes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const filme = await model.create(req.body);
            return res.status(201).json(filme);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const filme = await model.findByPk(req.params.id);
            if (filme) {
                await filme.update(req.body);
                return res.status(200).json(filme);
            }
            return res.status(404).json("Filme não encontrado");
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const filme = await model.findByPk(req.params.id);
            if (filme) {
                await filme.destroy();
                return res.status(200).json("Filme deletado");
            }
            return res.status(404).json("Filme não encontrado");
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }


    async searchId(req, res) {
        try {
            const filme = await model.findByPk(req.params.id);
            if (filme) {
                return res.status(200).json(filme);
            }
            return res.status(404).json("Filme não encontrado");
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new FilmeController();
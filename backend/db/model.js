import { Model, DataTypes } from "sequelize";
import db from "./db.js";

class FilmeModel extends Model {
    #id; // private
    titulo;
    ator;
    faixa_etaria;
    genero;
}

FilmeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        faixa_etaria: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Film",
        timestamps: false,
    }
);

export default FilmeModel;
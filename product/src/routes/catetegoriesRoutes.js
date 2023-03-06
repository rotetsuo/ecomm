import express from "express"
import CategoriesController from "../controller/categoriesController.js";

const router = express.Router();

router
    .get("/categorias/:id", CategoriesController.listarCategoriasPorId)
    .get("/categorias", CategoriesController.listarCategorias)
    .post("/categorias", CategoriesController.cadastrarCategorias)

export default router;
const express = require("express");
const router = express.Router();
const { getItem, getItems } = require("../controllers/category");
const { validatorGetItem } = require("../validators/category");

/**
 * Obtener una categoria en especifico
 */
router.get("/", getItems);

/**
 * Obtener lista de categorias registradas
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Exportar el modulo router, con las rutas definidas y su controlador
 */
module.exports = router;

const express = require("express");
const router = express.Router();
const { getItem, getItems } = require("../controllers/product");
const { validatorGetItem } = require("../validators/product");

/**
 * Obtener lista de productos registrados
 */
router.get("/", getItems);

/**
 * Obtener un producto en especifico
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Exportar el modulo router, con las rutas definidas y su controlador
 */
module.exports = router;

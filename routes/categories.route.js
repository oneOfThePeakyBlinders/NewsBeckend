const { Router } = require("express");

const {
  categoriesController,
} = require("../controllers/categories.controller.js");

const router = Router();

router.post("/category", categoriesController.addCategory);
router.delete("/category/:id", categoriesController.deleteCategory);
router.get("/category", categoriesController.getAllCategory);

module.exports = router;

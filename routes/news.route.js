const { Router } = require("express");

const { newsController } = require();

const router = Router("../controllers/news.controller");

router.post("/news", newsController.addNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("news/:id", newsController.changeNews);
router.get("/news", newsController.getNewsById);
router.get("/news/categories", newsController.getNewsByCategory);

module.exports = router;

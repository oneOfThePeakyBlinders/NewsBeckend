const { Router } = require("express");

const { commentsController } = require("../controllers/comments.controller.js");

const router = Router();

router.post("/comment", commentsController.addComment);
router.delete("/comment/:id", commentsController.deleteComment);
router.get("/comment", commentsController.getAllCommentsByNews);

module.exports = router;

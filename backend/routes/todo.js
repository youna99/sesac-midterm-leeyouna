const express = require("express");
const router = express.Router();
const controller = require('../controller/Ctodo');

router.get('/todos', controller.getTodos);

router.post('/todos', controller.postTodos);

router.get('/todos/:id', controller.getTodo);

router.patch('/todos/:id', controller.patchTodos);

router.delete('/todos/:id', controller.deleteTodo);

module.exports = router;
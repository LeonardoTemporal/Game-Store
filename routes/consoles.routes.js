const express = require("express");

const {
  createConsole,
  getAllConsoles,
  updateConsole,
  deleteConsole,
} = require("../controllers/consoles.controller");
const { consoleExist } = require("../middlewares/consoles.middlewares");

const consoleRouter = express.Router();

consoleRouter.post("/", createConsole);

consoleRouter.get("/", getAllConsoles);

consoleRouter.patch("/:id", consoleExist, updateConsole);

consoleRouter.delete("/:id", consoleExist, deleteConsole);

module.exports = { consoleRouter };

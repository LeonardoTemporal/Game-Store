const express = require("express");

const {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
  createReview,
} = require("../controllers/games.controller");

const { protectSession } = require("../middlewares/auth.middlewares");
const { gameExist } = require("../middlewares/games.middlewares");

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);

gamesRouter.use(protectSession);

gamesRouter.post("/", createGame);

gamesRouter.patch("/", gameExist, updateGame);

gamesRouter.delete("/", gameExist, deleteGame);

gamesRouter.post("/reviews/:gameId", createReview);

module.exports = { gamesRouter };

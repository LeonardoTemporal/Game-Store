const { Game } = require("../models/game.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const gameExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findOne({ where: { id, status: "active" } });

  if (!game) {
    return next(new AppError("Game not found", 404));
  }

  req.game = game;
  next;
});

module.exports = { gameExist };

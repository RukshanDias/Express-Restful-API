const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controller/goalController");

router.get("/", getGoals);

router.post("/", setGoal);
// router.route("/").get(getGoals).post(setGoal); <- both GET & POST in one line. only when endpoint is same.

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);
// router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;

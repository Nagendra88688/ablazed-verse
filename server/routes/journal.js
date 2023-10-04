const express = require("express");
const router = express.Router();

const JournalController = require("../controllers/journalController");

const {
  index = () => {},
  show = () => {},
  store = () => {},
  update = () => {},
  destroy = () => {},
} = JournalController || {};

router.get("/", index);
router.post("/show", show);
router.post("/store", store);
router.post("/update", update);
router.post("/destroy", destroy);

module.exports = router;

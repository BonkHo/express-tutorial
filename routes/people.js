const express = require("express");
const router = express.Router();

// Controllers
const {
	getPeople,
	createPerson,
	createPersonPostman,
	getPerson,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

// Requests
router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

router.get("/:id", getPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;

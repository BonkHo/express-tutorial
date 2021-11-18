const express = require("express");
const router = express.Router();

let { people } = require("../data.js");

// Requests
router.get("/", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, person: name });
});

router.post("/postman", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, error: `Person with id ${id} not found` });
	}
	person.name = name;
	res.status(200).json({ success: true, data: people });
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, error: `Person with id ${id} not found` });
	}
	people = people.filter((people) => people.id !== Number(id));
	res.status(200).json({ success: true, data: people });
});

module.exports = router;

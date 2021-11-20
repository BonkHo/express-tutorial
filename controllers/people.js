let { people } = require("../data.js");

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, error: "Name is required" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
};

const getPerson = (req, res) => {
	const { id } = req.params;
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res.status(404).json({ success: false, error: "Person not found" });
	}
	res.status(200).json({ success: true, data: person });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
	const { id } = req.params;
	const person = people.find((people) => people.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, error: `Person with id ${id} not found` });
	}
	people = people.filter((people) => people.id !== Number(id));
	res.status(200).json({ success: true, data: people });
};

module.exports = {
	getPeople,
	createPerson,
	createPersonPostman,
	getPerson,
	updatePerson,
	deletePerson,
};

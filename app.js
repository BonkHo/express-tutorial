const express = require("express");
const app = express();
const people = require("./routes/people.js");
const auth = require("./routes/auth.js");
// Middleware

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());
// People router
app.use("/api/people", people);
// Auth router
app.use("/login", auth);

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});

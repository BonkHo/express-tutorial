const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
	res.send("<h1> Home Page </h1><a href='./api/products'> Products </a>");
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
	// console.log(req);
	// console.log(req.params);
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	if (!singleProduct) {
		res.status(404).send("Product Not Found");
	}
	res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
	// console.log(req.query);\
	const { search, limit } = req.query;
	let sortedProducts = [...products];
	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
	res.send("<h1> Page Not Found </h1>");
});

app.listen(5000, () => {
	console.log("Server is running on: http://localhost:5000");
});

import express from 'express';
import expressEjsLayout from 'express-ejs-layouts';
//import { cartHandler } from "./handler/cartHandler.js";
import { countCartItems } from "./middlewares/global.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(expressEjsLayout);

app.use(countCartItems);


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/privacy", (req, res) => {
  res.render("privacy");
});

app.get("/terms", (req, res) => {
  res.render("terms");
});

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/order-confirmation", (req, res) => {
  res.render("order-confirmation");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

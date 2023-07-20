const fs = require('fs');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const Seed = require('./seeders');
const Migration = require('./migrations');
const { dbFile } = require('./db');

const app = express();

app.use(express.static('public'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

app.get("/", async (req, res) => {
  const categoria = req.query.categoria || "Todos";
  const foods = await Food.readByCategory(categoria);
  const formattedFoods = foods.map((food) => {
    return {
      ...food,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(food.price),
    };
  });
  res.render("index.njk", { title: "Menu", foods: formattedFoods });
});


(async () => {
  if (!fs.existsSync(dbFile)) {
    await Migration.up();
    await Seed.up();
  }
})();

app.listen(3000, () => {
  console.log('Food App is running!');
});

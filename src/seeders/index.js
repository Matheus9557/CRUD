const Food = require("../models/Food");

async function up() {
  Food.create({
    name: "Salada",
    image: "/imgs/salada.jpg",
    price: 15.5,
    categoria: "lanche"
  });

  Food.create({
    name: "Hambúrguer",
    image: "/imgs/hamburguer.jpg",
    price: 10,
    categoria: "lanche"
  });

  Food.create({
    name: "Sanduíche",
    image: "/imgs/sanduiche.jpg",
    price: 9,
    categoria: "lanche"
  });

  Food.create({
    name: "Old-Par",
    image: "/imgs/bebida.jpg",
    price: 5,
    categoria: "bebida"
  });

};

module.exports = { up };

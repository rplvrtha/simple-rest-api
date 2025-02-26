const express = require("express");
const route = express.Router();
const { create, getAll, getById, update, remove } = require("../service");

route.post("/:table", async (req, res) => {
  try {
    const data = await create(req.params.table, req.body);
    res.json(data);
  } catch (eror) {
    res.json(eror);
  }
});

route.get(`/:table`, async (req, res) => {
  try {
    const data = await getAll(req.params.table);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

route.get(`/:table/:id`, async (req, res) => {
  try {
    const { table, id } = req.params;
    const data = await getById(table, id);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

route.put(`/:table/:id`, async (req, res) => {
  try {
    const { table, id } = req.params;
    const data = await update(table, id, req.body);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

route.delete(`/:table/:id`, async (req, res) => {
  try {
    const { table, id } = req.params;
    const data = await remove(table, id);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = route;

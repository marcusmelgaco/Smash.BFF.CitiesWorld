const routes = require("express").Router();
const controller = require("../api/controller/ImportCitiesController")

module.exports = function () {

  routes.post("/import-cities", async function (req, res) {
    await controller.postImportCities(res);
  });

  return routes;
};

'use strict';
const Service = require('../service/ImportCitiesService');

module.exports.postImportCities = async (res) => {
    try {
        const service = new Service();
        if(await service.importCities()){
            res.status(200).send({ importedCities: true});
        } else {
            res.status(200).send({ importedCities: false, message: "Ocorreu um erro ao importar as cidade para a base de dados."});
        };

        return true;
    } catch (err) {
        res.status(200).send({ importedCities: false, message: err.getMessage()});
    }
};
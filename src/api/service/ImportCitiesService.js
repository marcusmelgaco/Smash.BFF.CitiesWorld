'use strict';
var { parse } = require('csv-parse')
const fs = require('fs');
const repository = require("../repository/ImportCitiesRepository");

const NAME_CITY_INDEX = 0;
const COUTRY_INDEX = 1;

module.exports = class ImportCitiesService {
    async importCities() {
        try {
            let citiesCountry = {}
            await new Promise((accept, reject) =>
                fs.readFile('./src/domain/data/world-cities.csv', async (err, data) => {
                    return await parse(data, {columns: false, trim: true}, async function(err, rows) {

                        for (let i = 1 ; i < rows.length; i++) {
                            citiesCountry[rows[i][COUTRY_INDEX]]
                            if(citiesCountry[rows[i][COUTRY_INDEX]]) {
                                citiesCountry[rows[i][COUTRY_INDEX]].push(rows[i][NAME_CITY_INDEX])
                            } else {
                                citiesCountry[rows[i][COUTRY_INDEX]] = [rows[i][NAME_CITY_INDEX]]
                            }
                        }

                        await repository.insertCities(citiesCountry);
                        accept();
                    })    
                })
            );

            return true;
        } catch (e) {
            return false;
        }
    }
}
const csvToJson = require('convert-csv-to-json');

const input = './public//gundata.csv';
const output = './public/gundata.json';

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input, output);
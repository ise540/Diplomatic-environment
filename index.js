const translate = require('./translate.json');

const LANG = process.env.LANG.toUpperCase().trim();

if (translate.hasOwnProperty(LANG)) {
    console.log(translate[LANG]);
} else {
    console.log(translate.RU);
}


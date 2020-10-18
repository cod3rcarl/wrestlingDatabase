const { query } = require ("../index");

const sqlStatement = `
DROP TABLE IF EXISTS wweTitle;
CREATE TABLE IF NOT EXISTS wweTitle(
    id SERIAL PRIMARY KEY,
    champion TEXT,
    dateWon VARCHAR,
    dateLost VARCHAR,
    Show TEXT,
    previousChampion TEXT
)`;

async function createTable (){
    const result = await query(sqlStatement);
    console.log(result)
}

createTable()


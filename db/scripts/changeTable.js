const { query } = require ("../index");

async function changeTable (){
    const result = await query(`SELECT TO_CHAR (dateLost,'DD/MM/YYYY') FROM wweTitle`);
    console.log(result.rows)
}

changeTable()


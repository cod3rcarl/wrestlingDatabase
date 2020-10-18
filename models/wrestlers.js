
let wweChampions = [
    {champion:'Drew McIntyre', dateWon: 'March 25, 2020', dateLost:'', Show: 'Wrestlemania 36, Night 2', previousChampion: 'Brock Lesnar'},
    {champion:'Brock Lesnar', dateWon: 'October 4, 2019', dateLost:'March 25, 2020', Show: "SmackDown's 20 Anniversary", previousChampion: 'Kofi Kingston'},
    {champion:'Kofi Kingston', dateWon: 'April 7, 2019', dateLost:'October 4, 2019', Show: "Wrestlemania 35", previousChampion: 'Danial Bryan'}
    ]
    

const { query } = require ("../db/index");

const text = `INSERT INTO wweTitle(champion, dateWon, dateLost, Show, previousChampion) VALUES($1, $2, $3, $4, $5) RETURNING *`;

async function populateTable(){

    for(let i = 0; i < wweChampions.length; i++){
        let currentItem = wweChampions[i];
        let res = await query(text, [currentItem.name, currentItem.score]); 
        console.log(res.rows); 
    }
} 

async function getWrestlerByDate() {
    let result = await query(`SELECT * FROM wweTitle`);
    return result.rows;
    }

    module.exports = {getWrestlerByDate};
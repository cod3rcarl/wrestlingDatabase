const { query } = require ("../index");
const wweChampions = require("../../models/champions")

// let wweChampions = [
//     {champion:'Drew McIntyre', dateWon: '05/04/2020', dateLost:'18/10/2020', Show: 'Wrestlemania 36, Night 2', previousChampion: 'Brock Lesnar'},
//     {champion:'Brock Lesnar', dateWon: '04/10/2019', dateLost:'05/04/2020', Show: "SmackDown's 20 Anniversary", previousChampion: 'Kofi Kingston'},
//     {champion:'Kofi Kingston', dateWon: '07/04/2019', dateLost:'04/10/2019', Show: "Wrestlemania 35", previousChampion: 'Danial Bryan'}
//     ]
    
    const text = `INSERT INTO wweTitle(champion, dateWon, dateLost, Show, previousChampion) VALUES($1, $2, $3, $4, $5) RETURNING *`;
    
    
    async function populateTable(){
    
        for(let i = 0; i < wweChampions.length; i++){
            let currentItem = wweChampions[i];
            let res = await query(text, [currentItem.champion, currentItem.dateWon, currentItem.dateLost, currentItem.Show, currentItem.previousChampion]); 
         console.log(res);
        }
    } populateTable();
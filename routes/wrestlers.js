const express = require("express")
const router = express.Router()
const {getWrestlerByDate} = require("../models/wrestlers")
// import functions from bootcamper model

router.get("/", async function(req, res){

  let result = await getWrestlerByDate(req.body);
  console.log(result)
  
  res.json({payload: result});
  

})
// router.get('/bootcampers', async function(req, res) {

//   // get all jokes
//   const bootcamper = await getAllBootcampers()
//   res.json({success: true, data: bootcamper});
// });

// router.get('/bootcampers', async function(req, res) {
  
//     let data = await getBootcampersByName(req.query.search)
//     console.log(data)
//     res.json({success: true, payload: data});

// });

// router.post('/bootcampers', async function(req, res) {
  
//   let data = await getBootcampersByName(req.res)
//   console.log(data)
//   res.json({success: true, payload: data});

// });

// router.put("/", async function(req, res){
//   // score = req.body
//   let data = await updateBootcamperScore(req.res)
//   console.log(data)
//   res.json({success: true, payload: data});
// })



module.exports = router
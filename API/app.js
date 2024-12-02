
const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express")
const app = express()
const port = 3000;
let databaseurl = 'database';


app.get('/intern', async (req, res) => {
    try {
      // Fetch the data from /get-intern
      console.log("Fetching From DATABASE")
      const internResponse = await axios.get('http://'+ databaseurl +':3000/get-interns');
      res.json(internResponse.data);  // Send the data received from /get-intern
    } catch (error) {
      console.error('Error fetching data from /get-intern:', error);
      res.status(500).send('Error forwarding intern data');
    }
  });
  
  app.listen(port,()=>{console.log(`API Active | Port | ${port}`)})
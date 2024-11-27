
const { default: axios } = require("axios");
const cors = require("cors");
let express = require("express")
let app = express()
let port = 3000;
let database = '172.17.0.2';

app.use(cors({
  origin: 'http://localhost:3003',  // Allow only requests from this origin
  methods: ['GET', 'POST'],        // Optionally allow specific methods
  allowedHeaders: ['Content-Type'] // Optionally specify allowed headers
}));

app.get('/intern', async (req, res) => {
    try {
      // Fetch the data from /get-intern
      const internResponse = await axios.get('http://'+'172.17.0.2'+':3000/get-interns');
      res.json(internResponse.data);  // Send the data received from /get-intern
    } catch (error) {
      console.error('Error fetching data from /get-intern:', error);
      res.status(500).send('Error forwarding intern data');
    }
  });
  
  app.listen(port,()=>{console.log(`SERVER | Port | ${port}`)})
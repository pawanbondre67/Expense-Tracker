const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const {readdirSync} = require('fs');

 
 require('dotenv').config();

 const PORT = process.env.PORT || 3000;
//  middlewares
app.use(express.json());
app.use(cors());
// app.get('/', (req, res)=>{
//     res.send('Hello World');

// });

// routes
readdirSync('./routes').map((route)=> app.use('/api', require(`./routes/${route}`)));

 
const server = ()=>{
  
     db()

   app.listen(PORT, ()=>{
       console.log(`Server is running on port ${PORT}`);
   });
}

server();
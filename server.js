const express = require('express');
const bodyparser = require('body-parser');
const {dbConnection} = require('./src/config/db.config');
const router = require('./src/routes/users.protected');
const Userrouter = require('./src/routes/auth.routes');
const cors = require("cors")
const app = express();
app.use(bodyparser.json());
app.use(cors({
    origin: 'http://localhost:3001',
  }));

app.use(router);
app.use(Userrouter);


app.listen(3000, async()=>{
    console.log("server listening on port 3000");
    await dbConnection();
})
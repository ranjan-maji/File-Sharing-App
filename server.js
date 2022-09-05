const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

//import from Routes
const fileRoute = require('./routes/files');
const showRoute = require('./routes/show');
const downloadRoute = require('./routes/download');



//cors

// corsOptions = {
//     origin: process.env.ALLOWED_CLIENTS.split(',')

//    // ['http://localhost:3000','http://localhost:3000','http://localhost:3000']
// }

// app.use(cors(corsOptions));

//Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/file', fileRoute);
app.use('/file', showRoute);
app.use('/files/download', downloadRoute);



app.get('*',(req, res) => {
    res.send('<center><br><h1>WelCome To  File-Sharing-App<h1><br>By Ranjan</center>');
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
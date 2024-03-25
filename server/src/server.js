const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

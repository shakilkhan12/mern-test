const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const connect = require('./config/db');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
app.use(cors());
// bodyParser middleware
app.use(bodyParser.json());
// Connect mongodb database
connect();
// Routes
app.use('/', userRouter);
app.use('/', postRouter);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.listen(PORT, () => {
	console.log(`Server running at port number 5000`);
});

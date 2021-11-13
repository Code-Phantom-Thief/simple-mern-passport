require('dotenv').config();
require('./passport');

const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const authRouter = require('./routes/authRouter');

const app = express();

const PORT = process.env.PORT || 5000;
const { SESSION_SECRET, SESSION_MAXAGE } = process.env;

app.use(express.json());
app.use(
	cookieSession({
		name: 'session',
		keys: [SESSION_SECRET],
		maxAge: SESSION_MAXAGE,
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET,POST,PUT,DELETE'
}))

app.use('/auth', authRouter);

app.listen(PORT, () => {
	console.log(`Server is runngin on port ${PORT}`);
});

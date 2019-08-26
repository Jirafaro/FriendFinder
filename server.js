// Dependencies
// =============================================================
const express = require("express");
const htmlRouter = require('./app/routing/htmlRoutes')
// const apiRouter = require('./app/routing/apiRoutes')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRouter);
// app.use('/api', apiRouter);


//testing
app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})
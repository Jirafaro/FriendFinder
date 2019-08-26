// Dependencies
// =============================================================
const express = require("express");
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.use(express.static(path.join(__dirname, "/static")));
//testing
app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})
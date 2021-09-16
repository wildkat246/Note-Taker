const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require('./routes/apiRoutes');

///initaizle the app by created variable to use express on app
const app = express();
///designate a port to use 
const PORT = 3001;

//setup middleware and body parsing 
app.use(express.static('public'));

app.use("/", htmlRoutes);

app.use("/api", apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
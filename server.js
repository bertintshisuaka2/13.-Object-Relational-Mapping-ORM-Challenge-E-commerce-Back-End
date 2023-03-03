const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

//seting up the server here
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting the routes here
//url is localhost:3001 here
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on port ${PORT}...Starting Server...`));
}).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
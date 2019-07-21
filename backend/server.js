const express = require('express');
const dbRoutes = require('./routes/databaseAccess.js');
const app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);
//app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('Server for React Todo App listening on port 3000!')
});

if (! process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}

mongoose.connection.on('connected', function() {
    console.log('Success: connected to MongoDb!');
});

mongoose.connection.on('error', function() {
    console.log('Error connecting to MongoDb. Check MONGODB_URI in env.sh');
    process.exit(1);
  });
  mongoose.connect(process.env.MONGODB_URI);

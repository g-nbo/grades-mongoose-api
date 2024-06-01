require('dotenv').config();
const express = require('express');

const gradesRouter = require('./routes/grades.js')

const PORT = process.env.PORT || 5050;
const app = express();

// JSON middleware
app.use(express.json());

// Grades Routes
app.use('/api/grades', gradesRouter)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Grades API.</h1>');
});

//Global Error Handling Middlware
app.use((err, req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
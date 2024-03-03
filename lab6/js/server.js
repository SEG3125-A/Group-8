const express = require('express');
const bodyParser = require('body-parser');
const surveyController = require('./controller');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route for handling form submission
app.post('/submit-survey', surveyController.submitSurvey);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

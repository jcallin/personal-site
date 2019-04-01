const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// the database
const messages = [];

// enhance app security with Helmet app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all messages
app.get('/', (req, res) => {
  const messages = messages.map(m => ({
    id: m.id,
    title: m.title,
    body: m.body,
  }));
  res.send(ms);
});

// get a specific message 
app.get('/:id', (req, res) => {
  const message = messages.filter(m => (m.id === parseInt(req.params.id)));
  if (message.length > 1) return res.status(500).send();
  if (message.length === 0) return res.status(404).send();
  res.send(message[0]);
});

// insert a new message
app.post('/', (req, res) => {
  const {title, description} = req.body;
  const newMessage= {
    id: messages.length + 1,
    title,
    body,
  };
  messages.push(newMessage);
  res.status(200).send();
});

// insert a new answer to a question
//app.post('/answer/:id', (req, res) => {
//  const {answer} = req.body;
//
//  const question = questions.filter(q => (q.id === parseInt(req.params.id)));
//  if (question.length > 1) return res.status(500).send();
//  if (question.length === 0) return res.status(404).send();
//
//  question[0].answers.push({
//    answer,
//  });
//
//  res.status(200).send();
//});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});

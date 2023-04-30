const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const courses = [
  { id: 1, title: 'React Fundamentals', author: 'John Smith', duration: '4 weeks' },
  { id: 2, title: 'Node.js Basics', author: 'Jane Doe', duration: '3 weeks' },
  { id: 3, title: 'MongoDB Essentials', author: 'Bob Johnson', duration: '5 weeks' }
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

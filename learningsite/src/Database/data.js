const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db');
db.run('CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price TEXT, des TEXT, off TEXT, logo TEXT)');
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, lastname TEXT, email TEXT, password TEXT)');

app.post('/users', async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    // Password hashing should be added here

    db.run('INSERT INTO users (name, lastname, email, password) VALUES (?, ?, ?, ?)', [name, lastname, email, password], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.get('/users', (req, res) => {
  db.all('SELECT id, name, lastname, email, password FROM users', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post('/course', async (req, res) => {
  const { name, price, des, off, logo } = req.body;

  try {
    db.run('INSERT INTO course (name, price, des, off, logo) VALUES (?, ?, ?, ?, ?)', [name, price, des, off, logo], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true });
    });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

app.get('/course', (req, res) => {
  db.all('SELECT id, name, price, des, off, logo FROM course', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

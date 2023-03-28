require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://password:postgres@localhost:6090/database?sslmode=disable'
})
const express = require('express')
const app = express()
const path = require('path')
// const PORT = process.env.PORT || 6090

// const pool = require('express')
// const query = require('esquery')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/')))

// Define routes here
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT * FROM journal_gif, journal_entry')
    res.status(200).send('healthy')
  } catch (err) {
    res.status(500).send('Failed to connect to database. Please try again later.')
  }
})

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM journal_entry')
    res.render('pages/index', { journal_entry: rows })
  } catch (err) {
    console.error(err)
    res.status(500).send('Failed to connect to database. Please try again later.')
  }
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/error', (req, res) => {
  res.render('pages/error')
})

// Start the server
app.listen(6090, () => {
  console.log('Server started on port 6090')
})

// Error handling
// Unspecified errors should be passed to error.ejs dynamically via the 'status' attribute.
// 404 error
app.use((req, res, next) => {
  res.status(404).render('pages/error', { status: 404 })
})
// 500 error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('pages/error', { status: 500 })
})

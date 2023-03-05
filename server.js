const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/')))

// Define routes here
app.get('/health', (req, res) => {
  res.status(200).send('healthy')
})

app.get('/', (req, res) => {
  res.render('pages/index')
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
// 404 error
app.use((req, res, next) => {
  res.status(404).render('pages/error', { status: 404 })
})
// 500 error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('pages/error', { status: 500 })
})

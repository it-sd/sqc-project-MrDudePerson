const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Serve static files from the public directory
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

// Start the server
app.listen(6090, () => {
  console.log('Server started on port 6090')
})

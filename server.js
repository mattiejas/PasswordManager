const express = require('express')
const app = express()

module.exports = {
  runServer: function() {
    app.use(express.static(`${__dirname}/client/dist`))
    app.get('/', (req, res) => res.render('index.html'))
    app.listen(3000, () => console.log('Listening on port 3000...'))
  }
}

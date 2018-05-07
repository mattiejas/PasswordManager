const express = require('express')
const app = express()

module.exports = {
  runServer: function() {
    app.use(express.static(`${__dirname}/client/dist`))
    app.get('/', (req, res) => res.render('index.html'))
    app.listen(3987, () => console.log('Listening on port 3987...'))
  }
}

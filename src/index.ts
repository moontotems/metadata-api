import { logger } from './utils'
const path = require('path')
const express = require('express')
const db = require('./db/opensea_hashmap')

const PORT = process.env.PORT || 5000

export const MIN_TOKEN_ID = 0
export const MAX_TOKEN_ID = 9457

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('')
})

app.get('/token/:token_id', function (request, response) {
  const tokenId = parseInt(request.params.token_id).toString()

  if (isNaN(tokenId) || tokenId < MIN_TOKEN_ID || tokenId > MAX_TOKEN_ID) {
    response.status(400).send('Invalid request. Invalid token id.')
    return
  }

  const data = db[tokenId]

  response.send(data)
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

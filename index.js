const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./db')
const db = require('./db')

const playlists = require('./playlists/model')

const playlistsRouter = require('./playlists/router')

const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(playlistsRouter)
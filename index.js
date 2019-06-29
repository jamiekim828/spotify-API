const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const Sequelize = require('sequelize')
const sequelize = require('./db')
const db = require('./db')

const playlists = require('./playlists/model')
const songs = require('./songs/model')
const user = require('./user/model')

const playlistsRouter = require('./playlists/router')
const songsRouter = require('./songs/router')
const loginRouter = require('./auth/router')
const userRouter = require('./user/router')

const app = express()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(jsonParser)
app.use(playlistsRouter)
app.use(songsRouter)
app.use(loginRouter)
app.use(userRouter)
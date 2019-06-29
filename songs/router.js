const { Router } = require('express')
const Playlist = require('../playlists/model')
const Songs = require('./model')
const router = new Router()

router.post('/playlists/:id/songs', (req, res, next) => {
    const id = req.param.id
    Playlist
        .findByPk(id, {include: [Songs]})
        .then()
        .catch()
})
        
module.exports = router
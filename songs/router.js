const { Router } = require('express')
const Playlists = require('../playlists/model')
const Songs = require('./model')
const auth = require("../auth/middleware")
const router = new Router()

router.post('/playlists/:id/songs', auth, (req, res) => {
    const id = req.param.id
    Playlists
        .findOne({
            where: { id: req.params.id }
        })
        .then(playlist => {
            if (!playlist) {
                return res
                    .status(404)
                    .send({
                        message: 'Playlist does not exist'
                    })
            }
            Songs
                .create({
                    Title: Title,
                    artist: artist,
                    album: album,
                    playlistId: Playlists.id
                })
                .then(song => res
                    .status(201)
                    .send({ song: song }))
        })
        .catch(err => res.status(422).send(err))
})

module.exports = router
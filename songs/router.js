const { Router } = require('express')
const Playlists = require('../playlists/model')
const Songs = require('./model')
const auth = require("../auth/middleware")
const router = new Router()

router.post('/playlists/:id/songs', (req, res) => {
    const id = req.param.id
    req.body.playlistsId = id
    Promise
        .all([Songs.create(req.body),
              Playlists.findByPk(id)])
        .then(([song, playlist]) => {
            if (playlist.userId !== req.body.userId) {
                return res
                    .status(404)
                    .send({
                        message: `You are not authorized to do this`
                    })
            } return res
                .status(201)
                .send(song)
        })
        .catch(err => res.send({ error: `${err.message}` }))
})

module.exports = router
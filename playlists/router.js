const { Router } = require('express')
const Playlists = require('./model')
const Songs = require('../songs/model')
const auth = require('../auth/middleware')
const router = new Router()

router.get('/playlists', auth, (req, res, next) => {
    Playlists
        .findAll({ where: { userId: `${req.body.userId}` } })
        .then(playlists => {
            res
                .status(200)
                .json({
                    playlists: playlists
                })
        })
        .catch(err => {
            res
                .status(400)
                .json({
                    message: "cannot find playlists",
                    error: err
                })
        })
})
router.post('/playlists', auth, (req, res, next) => {
    Playlists
        .create(req.body)
        .then(playlist => {
            if (!playlist) {
                return res.status(404).send({
                    message: "Playlist does not exist"
                })
            } return res.status(201).json({
                message: "created new palylist",
                playlist
            })
        })
        .catch(err => {
            res
                .status(422)
                .json({
                    message: "cannot be saved",
                    error: err
                })
        })
})
router.get('/playlists/:id', auth, (req, res, next) => {
    const id = req.param.id
    Playlists
        .findByPk(id, { include: [{ model: Songs, as: 'songs' }] })
        .then(playlist => {
            if (!playlist || playlist.userId !== req.body.userId) {
                return res.status(404).send({
                    message: "Not authorized"
                })
            } return res.json(playlist)
        })
        .catch(err => {
            res
                .status(404)
                .json({
                    message: `cannot find the playlist ${id}`,
                    error: err
                })
        })
})
router.delete('/playlists/:id', auth, (req, res, next) => {
    const id = req.params.id
    Playlists
        .findByPk(id)
        .then(playlist => {
            if (!playlist || playlist.userId !== req.body.userId) {
                return res.status(404).send({ message: "Not authorized" })
            } return playlist.destroy().then(() =>
                res
                    .status(200)
                    .send({
                        message: `Deleted the playlist id ${id}`
                    }))
                .catch(err => next(err))
        })
})

module.exports = router
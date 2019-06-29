const { Router } = require('express')
const Playlists = require('./model')
const router = new Router()

router.get('/playlists', (req, res, next) => {
    Playlists
        .findAll()
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
router.post('/playlists', (req, res, next) => {
    Playlists
        .create(req.body)
        .then(playlist =>
            res
                .status(201)
                .json({
                    message: "created new palylist",
                    playlist
                }))
        .catch(err => {
            res
                .status(422)
                .json({
                    message: "cannot be saved",
                    error: err
                })
        })
})
router.get('/playlists/:id', (req, res, next) => {
    const id = req.param.id
    Playlists
        .findByPk(id)
        .then(playlist =>
            res
                .status(200)
                .json(playlist))
        .catch(err => {
            res
                .status(404)
                .json({
                    message: `cannot find the playlist ${id}`,
                    error: err
                })
        })
})
router.delete('/playlists/:id', (req, res, next) => {
    const id = req.params.id
    Playlists
        .findByPk(id)
        .then(playlist =>
            playlist
                .destroy())
        .then(() => {
            res
                .status(200)
                .send({
                    message: `deleted the playlist id ${id}`
                })})
        .catch(err => next(err))
})

module.exports = router
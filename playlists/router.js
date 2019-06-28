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
            playlists: playlists})
        })
    .catch(error => {
        res
        .status(400)
        .json({
            message: 'cannot find playlists',
            error: error
        })
    })
})

module.exports = router
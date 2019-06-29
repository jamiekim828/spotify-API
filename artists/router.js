const { Router } = require('express')
const auth = require('../auth/middleware')
const router = new Router()

router.get('/artists', (req, res, next) => {

})

router.put('/playlists/:id/songs/:id', (req, res, next) => {

})

router.delete('/playlists/:id/songs/:id', (req, res, next) => {
    
})

module.exports = router
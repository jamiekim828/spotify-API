const { Router } = require('express')
const auth = require('../auth/middleware')
const playlists = require('../playlists/model')
const router = new Router()

router.get('/artists', auth, (req, res, next) => {
    playlists.findAll({
        where: { userId: req.user.id },
        include: [Songs]
    })
    .then(res => console.log(res))
    .then(res => res.status(200).send({ message: 'Valid contents'}))
    .catch(err => {res.status(404).json(err)})
})

router.put('/playlists/:id/songs/:id', (req, res, next) => {

})

router.delete('/playlists/:id/songs/:id', (req, res, next) => {
    
})

module.exports = router
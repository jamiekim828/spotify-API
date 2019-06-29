const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/user', function (req, res, next) {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    User
        .create(req.body)
        .then(user => res.status(201).json({
            message: " New User Added",
            user: user
        }))
        .catch(err => next(err))
})

router.post('/tokens', function (req, res, next) {
    const email = req.body.email
    const password = req.body.password
    if (email && password) {
        User.findOne({
            where: { email: eamil}
        }).then(entity => {
            if(!entity) {
                req.status(400).send({message: "User does not exist"})
            }
            if(bcrypt.compareSync(password, entity.password)) {
                res.send({
                    jwt: toJWT({token: "<JWT>"})
                })
            } else {
                res.status(400).send({message: 'Password was incorrect'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({message: 'Something went wrong'})
        })
    } else {
        res.status(400).send({ message: "Supply valid email and password"})
    }
})

module.exports = router
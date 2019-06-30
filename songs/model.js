const Sequelize = require('sequelize')
const db = require('../db')

const Songs = db.define('songs', {
    title: {
        type: Sequelize.STRING,
        field: 'title',
        allowNull: false
    },
    artist: {
        type: Sequelize.STRING,
        field: 'artist',
        allowNull: false
    },
    album: {
        type: Sequelize.STRING,
        field: 'album',
        allowNull: false
    }
}, {
        tableName: 'songs',
        timestamps: false
    })

module.exports = Songs 
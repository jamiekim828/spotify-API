const Sequelize = require('sequelize')
const db = require('../db')

const Playlists = db.define('playlists', {
    name: {
        type: Sequelize.STRING,
        field: 'playlist_name'
    }
}, {
        tableName: 'music_playlists'
    })

module.exports = Playlists 
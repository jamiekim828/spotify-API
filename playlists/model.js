const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const Playlists = db.define('playlists', {
    name: {
        type: Sequelize.STRING,
        field: 'playlist_name',
        allowNull: false
    }
}, {
        tableName: 'music_playlists'
    })

Playlists.belongsTo(User)

module.exports = Playlists 
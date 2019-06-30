const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')
const Songs = require('../songs/model')

const Playlists = db.define('playlists', {
    name: {
        type: Sequelize.STRING,
        field: 'playlist_name',
        allowNull: false
    }
}, {
        tableName: 'playlists'
    })

Playlists.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Playlists.hasMany(Songs)

module.exports = Playlists 
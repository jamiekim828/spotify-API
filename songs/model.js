const Sequelize = require('sequelize')
const db = require('../db')
const Playlists = require('../playlists/model')
const User = require('../user/model')

const Songs = db.define('songs', {
    Title: {
        type: Sequelize.STRING,
        field: 'Title',
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

Songs.belongsTo(Playlists, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

module.exports = Songs 
const Sequelize = require('sequelize')

const sequelize = new Sequelize('cafe', 'root', 'mautauaja', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: this,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
},
)

const Menu = sequelize.define('menu', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {freezeTableName: true});

    module.exports = Menu;

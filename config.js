const Sequelize = require('sequelize')

const sequelize = new Sequelize('cafe', 'anakmama', 'anak kecil', {
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
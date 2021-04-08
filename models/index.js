const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false, //não permite codinomes, trabalha com a string

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});//iniciando a conexão com o BD utilizando o sequelize

const db = {};//criei o objeto

db.Sequelize = Sequelize;//atributo do objeto db
db.sequelize = sequelize;//atributo do objeto db

db.tutorial = require('./tutorial.model')(sequelize, Sequelize);//atributo do objeto db

module.exports = db;//para exportar o modulo
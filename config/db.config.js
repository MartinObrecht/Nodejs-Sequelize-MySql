module.exports = {
    HOST: "localhost",
    USER: 'root',
    PASSWORD: '12345',
    DB: 'db_node',
    dialect: "mysql",
    pool: {
        max: 5,//max de conexões no banco
        min: 0,//minimo de conexões no banco
        acquire: 30000,//numero de requisições que o app pode fazer ao db
        idle: 10000 //tempo que a conexão pode ficar sem responder
    }
};
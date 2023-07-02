const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Morador = connection.define('morador', {
    MOR_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    MOR_NOME: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MOR_APARTAMENTO: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MOR_EMAIL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MOR_TELEFONE: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
}
)

// Sincronizando model com banco de dados
 Morador.sync({force: false});

module.exports = Morador;
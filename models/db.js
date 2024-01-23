const Sequelize  = require('sequelize');

const sequelize = new Sequelize( 'Redirect', 'root', 'gustavofantoni2005', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(function() {
    console.log("Conexão realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
})

  module.exports = sequelize;
const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://lucasdias08:Lucas081205@cluster0.9add4.mongodb.net/test')
}

module.exports = conexao

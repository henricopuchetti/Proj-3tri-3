const mongoose = require('mongoose')

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://user3tri:user3tri@fiaptecnico.jm5sh.mongodb.net/html5   up')
}

const modelo = mongoose.Schema({
    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date,default:Date.now}
})

const conteudo = mongoose.model("conteudo",modelo)

module.exports = {conexao,conteudo}
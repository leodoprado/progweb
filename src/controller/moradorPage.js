const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");
const Morador = require('@model/moradorModel');

router.get('/login/morador', (req, res) => {
    Morador.findAll().then(function(moradores){
        res.render("log/morador", {moradores: moradores})
    })
})

router.get('/login/morador/adicionar', (req, res) => {
    res.render("log/adicionarMorador")
})

router.post('/login/morador/adicionar', (req, res) => {
    var nome = req.body.nome;
    var apartamento = req.body.apartamento
    var email = req.body.email;
    var telefone = req.body.telefone;

    var id = req.params.MOR_ID;

    Morador.create({
        MOR_NOME: nome,
        MOR_APARTAMENTO: apartamento,
        MOR_EMAIL: email,
        MOR_TELEFONE: telefone,
        USR_ID: id
    }).then(() => {
        res.redirect("/login/morador/")
    })
})

router.get('/login/morador/apagar', (req, res) => {
    res.render("log/apagarMorador")
})

router.post('/login/morador/apagar', (req, res) => {
    idMorador = req.body.idMorador;
    Morador.findOne({where:{MOR_ID: idMorador}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/morador/apagar/${id.MOR_ID}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/morador/apagar/:idMorador', (req, res) => {
    Morador.findOne({where: {MOR_ID: idMorador}}).then(function(dados){
        if(!dados) {
            res.redirect(`/login/morador`)
        } else {
            res.render('log/confirmarMorador', { dados: dados})
        }
    })
})

router.post('/login/morador/apagar/:idMorador', (req, res) => {
    Morador.destroy ({
        where: { MOR_ID: idMorador}
    }).then(function(){
        res.redirect('/login/morador')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})

module.exports = router;
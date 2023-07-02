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

router.get('/login/administrador/gerencial/update', (req, res) => {
    res.render("log/morador")
})

router.post('/login/morador/update', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/morador/update/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/morador/update/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/login/morador/update`)
        } else {
            res.render('log/updateMorador', { dados: dados})
        }
    })
})

router.post('/login/update/:idUsuario', (req, res) => {
    var nome = req.body.nome;
    var datanascimento = req.body.datanascimento;
    var cpf = req.body.cpf;
    var email = req.body.email;
    var telefone1 = req.body.telefone1;

    if(req.body !== ''){
        Usuario.update({
            nome: nome,
            datanascimento: datanascimento,
            cpf: cpf,
            email : email,
            telefone1 : telefone1,
        },
        {
            where: {idUsuario : idUsuario}
        });
        res.redirect('/login/morador');
    } else {
        res.render('log/morador', { result : req.body})
    }
})

module.exports = router;
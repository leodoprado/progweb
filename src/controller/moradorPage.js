const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");

router.get('/login/morador', (req, res) => {
    Usuario.findAll().then(function(moradores){
        res.render("log/morador", {moradores: moradores})
    })
})

router.get('/login/morador/create', (req, res) => {
    res.render("log/adm/createAdministrador")
})

router.post('/login/morador/create/success', (req, res) => {
    var nome = req.body.nome;
    var apartamento = req.body.apartamento
    var garagem = req.body.garagem;
    var email = req.body.email;
    var telefone = req.body.telefone;

    Usuario.findOne({where:{idUsuario: idUsuario}}).then(user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt)

            Usuario.create({
                nome: nome,
                datanascimento: datanascimento,
                cpf: cpf,
                email: email,
                telefone1: telefone1,
                nivelAcesso: nivelAcesso,
                idUsuario: idUsuario,
                senha: hash
            }).then(() => {
                res.redirect("/login/administrador/gerencial/create")
            }).catch((err) => {
                res.redirect("/login/administrador/gerencial/create")
            });
        } else {
            res.redirect("/login/administrador/gerencial/create");
        }
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
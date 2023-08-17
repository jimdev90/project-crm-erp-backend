const Colaborador = require('../models/colaborador');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../helpers/jwt');

const registro_colaborador_admin = async function (req, res) {
    const data = req.body;
    try {

        const colaboradores = await Colaborador.find({email: data.email});

        bcrypt.hash('123456789', null, null, async function(err, hashPassword){
            if (err) {
                return res.status(200).send({ data: undefined, message: 'No se pudo generar la contraseña' })
            }else{
                if (colaboradores.length >= 1) {
                    return res.status(200).send({ data: undefined, message: 'El correo electrónico ya existe' })
                }else{
                    data.fullnames = `${data.nombres} ${data.apellidos}`;
                    data.password = hashPassword;
                    const colaborador = await Colaborador.create(data);
                    return res.status(200).send({ data: colaborador })
                }
            }
           
        })
      
    } catch (error) {
        return res.status(200).send({ data: undefined, message: 'Verifique los datos del formulario' })
    };

}

const login_admin = async function(req, res){
    const data = req.body;
    const colaboradores = await Colaborador.find({email: data.email});
    if (colaboradores.length >= 1) {
        bcrypt.compare(data.password, colaboradores[0].password, async function(err, check){
            if (check) {
                return res.status(200).send({
                    data: colaboradores[0],
                    token: jwt.createToken(colaboradores[0])
                })
            }else {
                return res.status(200).send({ data: undefined, message: 'Credenciales incorrectas' })
            }
        })
        
    }else{
        return res.status(200).send({ data: undefined, message: 'El correo electrónico no existe' })
    }

}

const test = async function (req, res) {
    console.log('Test Router');
}


module.exports = {
    registro_colaborador_admin,
    login_admin,
    test
}
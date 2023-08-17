const jwt = require('jwt-simple');
const moment = require('moment');

const secret = 'jimcode@2023*';


exports.createToken = function(user) {
    const payload = {
        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix(),
    }

    return jwt.encode(payload, secret);
}
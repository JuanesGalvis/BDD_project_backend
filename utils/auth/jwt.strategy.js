const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_JWT
}

// Internamente se encargará de hacer la verificación del token
const JWTStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload);
});

module.exports = { JWTStrategy };
const Passport = require('passport');
const { LocalStrategy } = require('./local.strategy');
const { JWTStrategy } = require('./jwt.strategy');

Passport.use(LocalStrategy);
Passport.use(JWTStrategy);
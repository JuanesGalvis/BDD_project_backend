const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const MongoDB = require('../../mongodb/client');
const client = new MongoDB();

const LocalStrategy = new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        
        try {
            // Buscar un usuario y si no lo encuentra termina como null
            const user = await client.login(email);
            if (!user) {
                done(null, false);
            }
            
            // Comparar contraseñas y sino terminar con null
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (!isMatch) {
                done(null, false);
            }

            // Tras las validaciones retornamos al usuario
            delete user.password;
            done(null, user);

        } catch (error) {
            done(error, false);
        }    
    }
);

module.exports = { LocalStrategy };
const express = require('express');
const RouterMongo = express.Router();

const MongoDB = require('../mongodb/client');
const client = new MongoDB();

const bcrypt = require('bcrypt');
const Passport = require('passport');

const JWT = require('jsonwebtoken');

const { SendEmail } = require('../utils/nodemailer');

/** LOGIN */
RouterMongo.post('/login',
    Passport.authenticate('local', { session: false }),
    async (req, res) => {

        console.log(req.headers);

        try {
            // Usuario viene del Middleware de Passport
            const User = req.user;
            // Firma del JWT
            const payload = {
                sub: User["_id"],
                owner: User.name
            }
            const token = JWT.sign(payload, process.env.SECRET_JWT);

            res.json({
                User,
                token
            })

        } catch (error) {
            res.status(401).send('Unauthorized');    
        }
})

/** RECUPERAR CONTRASEÑA */
RouterMongo.post('/recovery', async (req, res) => {
    try {

        const { email } = req.body;
        const user = await client.login(email);

        if (!user) {
            res.status(401).send('No tienes una cuenta'); 
        } else {

            const payload = {
                sub: user["_id"],
                email: user.email
            }

            const token = JWT.sign(
                payload,
                process.env.SECRET_JWT,
                {
                    expiresIn: '15min'
                });

            SendEmail(user, token);

            const response = await client.setRecoveryToken(user.email, token);

            res.json({
                response,
                message: 'SE HA ENVIADO EL CORREO CON EXITO'
            })
        }

    } catch (error) {
        res.json(error);    
    }
})

RouterMongo.post('/change-password',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        try {
            
            const { newPassword } = req.body;
            const newPasswordSegure = await bcrypt.hash(newPassword, 10);

            const user = await client.getRecoveryToken(req.user.email);

            if (user.recoveryToken) {
                
                const response = await client.recovery(req.user.email, newPasswordSegure);
                
                res.json({
                    response,
                    message: 'CONTRASEÑA CAMBIADA CON ÉXITO'
                })
            } else {
                res.json({
                    message: 'EL TOKEN INGRESADO YA FUE USADO'
                })
            }

        } catch (error) {
            res.json(error);    
        }

    }
)

/** USUARIOS */

RouterMongo.delete('/user/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const users = await client.deleteUser(req.params.id);

        res.json({
            users: users,
            message: 'USUARIO ELIMINADO'
        })
    }
);

RouterMongo.post('/new_user', async (req, res) => {

    const UserObject = req.body;
    // Encriptación de contraseña
    UserObject.password = await bcrypt.hash(UserObject.password, 10)
    const response = await client.createUser(UserObject);

    res.json({
        newUser: response,
        message: 'USUARIO CREADO CON ÉXITO'
    })

})

/** PLANES DE ESTUDIO */

RouterMongo.get('/planes',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const response = await client.getAllPlanes(req.user.sub);

        res.json({
            Planes: response,
            message: 'PLANES DE ESTUDIOS DE DICHO USUARIO'
        })
    }
);

RouterMongo.get('/plan/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const plan = await client.getOnePlan(req.params.id);

        res.json({
            users: plan,
            message: 'PLAN DE ESTUDIOS ESPECIFICO'
        })
    }
);

RouterMongo.post('/new_plan', 
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const response = await client.createPlan({
            ...req.body,
            id_owner: req.user.sub
        });

        // Falta validar JWT
        res.json({
            newPlan: response,
            message: 'PLAN DE ESTUDIOS CREADO CON ÉXITO'
        })
    }
)

RouterMongo.delete('/planes/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        
        const response = await client.deletePlan(req.params.id);
        
        res.json({
            eliminado: response,
            message: 'PLAN DE ESTUDIOS ELIMINADO'
        })
    }
);

/** NOTAS */

RouterMongo.get('/notes/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const response = await client.getNotesOnePlan(req.params.id);

        res.json({
            Planes: response,
            message: 'NOTAS DE DICHO USUARIO'
        })
    }
);

RouterMongo.get('/note/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const note = await client.getOneNote(req.params.id);

        res.json({
            users: note,
            message: 'NOTA EN ESPECIFICO'
        })
    }
);

RouterMongo.post('/new_note',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        const Nota = req.body;
        
        const response = await client.createNote(Nota);

        // Falta validar JWT
        res.json({
            newPlan: response,
            message: 'NOTA CREADA CON ÉXITO'
        })
    }
)

RouterMongo.delete('/notes/:id',
    Passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        
        const response = await client.deleteNote(req.params.id);
        
        res.json({
            eliminado: response,
            message: 'NOTA ELIMINADA'
        })
    }
);

module.exports = RouterMongo;
const { MongoClient, ObjectId } = require('mongodb');
 
const URL = process.env.URI_MONGODB;

class MongoDB {
    constructor() {
        this.client = new MongoClient(URL, {
            useNewUrlParser: true, useUnifiedTopology: true 
        });

        this.dbname = 'evalpoli';
    }

    connect() {
        if (!this.connection) {
            this.connection = new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                    }

                    console.log("MONGODB CONECTADO CORRECTAMENTE");
                    resolve(this.client.db(this.dbname));
                })
            })
        }
    
        return this.connection;
    }

    /** LOGIN */
    login(userEmail) {
        return this.connect().then((db) => {
            return db.collection('users').findOne({email: userEmail});
        })
    }

    recovery(userEmail, newPassword) {
        return this.connect().then((db) => {
            return db.collection('users').updateOne({email: userEmail}, {$set: {password: newPassword, recoveryToken: null}})
        })
    }

    /** USUARIOS */

    createUser(user) {
        return this.connect().then((db) => {
            return db.collection('users').insertOne(user)
        })
    }

    deleteUser(userId) {
        return this.connect().then((db) => {
            return db.collection('users').deleteOne({_id: ObjectId(userId)})
        })
    }

    getRecoveryToken(userEmail) {
        return this.connect().then((db) => {
            return db.collection('users').findOne({email: userEmail});
        })
    }

    setRecoveryToken(userEmail, token) {
        return this.connect().then((db) => {
            return db.collection('users').updateOne({email: userEmail}, {$set: {recoveryToken: token}})
        })
    }

    /** PLANES DE ESTUDIO */

    getOnePlan(planId) {
        return this.connect().then((db) => {
            return db.collection('planes').find({_id: ObjectId(planId)}).toArray();
        })
    }

    createPlan(plan) {

        const {
            semestre,
            periodo,
            grupo,
            asignatura,
            docente,
            id_owner
        } = plan;

        return this.connect().then((db) => {
            return db.collection('planes').insertOne({
                semestre,
                periodo,
                grupo,
                asignatura,
                docente,
                id_owner: ObjectId(id_owner)
            });
        })
    }

    getAllPlanes(userId) {
        return this.connect().then((db) => {
            return db.collection('planes').find({"id_owner": ObjectId(userId)}).toArray();
        })
    }

    deletePlan(planId) {
        return this.connect().then((db) => {
            return db.collection('planes').deleteOne({_id: ObjectId(planId)})
        })
    }

    /** NOTAS */

    getOneNote(noteId) {
        return this.connect().then((db) => {
            return db.collection('notas').find({_id: ObjectId(noteId)}).toArray();
        })
    }

    createNote(note) {
        const {
            nombre,
            descripcion,
            porcentaje,
            nota,
            id_plan
        } = note;

        return this.connect().then((db) => {
            return db.collection('notas').insertOne({
                nombre,
                descripcion,
                porcentaje,
                nota,
                id_plan: ObjectId(id_plan)
            });
        })
    }

    getNotesOnePlan(planId) {
        return this.connect().then((db) => {
            return db.collection('notas').find({"id_plan": ObjectId(planId)}).toArray();
        })
    }

    deleteNote(noteId) {
        return this.connect().then((db) => {
            return db.collection('notas').deleteOne({_id: ObjectId(noteId)})
        })
    }
}

module.exports = MongoDB;
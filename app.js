const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const contactsRouter = require('./src/routes/contacts/contacts.routes')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal Server Error ' } = err;
    res.status(status).json({ message });
})

module.exports = app

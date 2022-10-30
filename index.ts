import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Student from './routes/student'
import Organization from './routes/organization'
import Building from './routes/building'

require('dotenv').config()

const app = express()
const port = process.env.PORT
const uri = process.env.MONGO_URL

app.use(bodyParser.json())
app.use('/student', Student)
app.use('/organization', Organization)
app.use('/building', Building)

mongoose.connect(uri)
.catch(error => console.log(error))
.then(_ => console.log("successfully connect"));

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})
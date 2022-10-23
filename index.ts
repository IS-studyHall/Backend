import express from 'express';
import student from './routes/student'
import bodyParser from 'body-parser'
import User from './models/student'
import mongoose from 'mongoose'

require('dotenv').config()

const app = express()
const port = process.env.PORT
const uri = process.env.MONGO_URL

app.use(bodyParser.json())
app.use('/student', student)

mongoose.connect(uri)
.catch(error => console.log(error))
.then(_ => console.log("successfully connect"));

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})
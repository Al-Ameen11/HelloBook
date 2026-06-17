import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// Import Routes
import contactRoutes from './routes/routes.contact.js'

app.use('/contacts', contactRoutes)


// Server
mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
  console.log("MongoDb connected")
})
.catch((err)=> console.log(err))

export default app

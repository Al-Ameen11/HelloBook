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

const PORT = process.env.PORT || 5000

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Server
mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
  console.log("MongoDb connected")
})
.catch((err)=> console.log(err))

export default app

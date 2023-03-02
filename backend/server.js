import { config } from 'dotenv'
import cors from 'cors'
config()
import express from 'express'
import workoutRoutes from './routes/workouts.js'
import mongoose from 'mongoose'
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db and listening on port', PORT)
    })
  })
  .catch(err => {
    console.log(err)
  })

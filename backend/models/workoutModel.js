import { Schema, model } from "mongoose"

const Schema1 = Schema

const workoutSchema = new Schema1({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default model('Workout', workoutSchema)
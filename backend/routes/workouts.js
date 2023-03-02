import { Router } from 'express'
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} from '../controllers/workoutController.js'

const router = Router()

// GET all workouts
router.get('/', (req, res) => {
  getWorkouts(req, res)
})

// GET a single workout
router.get('/:id', (req, res) => {
  getWorkout(req, res)
})

// POST a new workout
router.post('/', async (req, res) => {
  createWorkout(req, res)
})

// DELETE a workout
router.delete('/:id', (req, res) => {
  deleteWorkout(req, res)
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  updateWorkout(req, res)
})
export default router

import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js'

// date-fns
import { formatDistanceToNow } from 'date-fns'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const handleDelete = async id => {
    const response = await fetch('http://localhost:4000/api/workouts/' + id, {
      method: 'DELETE',
    })
    const json = await response.json()

    if (response.ok) {
      console.log('Workout deleted successfully', json)
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <button onClick={() => handleDelete(workout._id)}>x</button>
    </div>
  )
}

export default WorkoutDetails

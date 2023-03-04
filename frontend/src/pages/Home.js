import { useEffect, useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js'

// components
import WorkoutDetails from '../components/WorkoutDetails.js'
import WorkoutForm from '../components/WorkoutForm.js'

const Home = () => {
  const [isPending, setIsPending] = useState(true)
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setIsPending(false)
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])
  return (
    <div className='home'>
      <div className='workouts'>
        {isPending && <p>...Loading</p>}
        {workouts &&
          workouts.map(work => (
            <WorkoutDetails key={work._id} workout={work} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home

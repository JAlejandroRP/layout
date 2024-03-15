import { Tab } from '@headlessui/react'
import MyDisclosoure from './Disclosure'
import { workoutWeek, emptyWorkout } from '../dummys/workout'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ExerciseSelector from './ExerciseSelector'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function WorkoutDay() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState({})
  const [workout, setWorkout] = useState(emptyWorkout)

  const updateSelectedExercise = (exercise) => {
    setSelectedExercise(exercise)
  }

  const addExercise = () => {
    if(!(selectedDay >= 0 && selectedDay < workout.length)) {
      closeModal() 
      return 
    }

    const newWorkout = workout
    // console.log(selectedExercise);
    newWorkout[selectedDay].exercises.push(selectedExercise)
    newWorkout[selectedDay].sets.push([
      {
        reps: 10,
        weigth: 20,
        rest: 120
      },
      {
        reps: 10,
        weigth: 20,
        rest: 120
      },
      {
        reps: 10,
        weigth: 20,
        rest: 120
      },
      {
        reps: 10,
        weigth: 20,
        rest: 120
      },
    ])
    setWorkout(newWorkout)
    closeModal()
  }

  function closeModal() {
    // addExercise()
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // let [workdays, setWorkdays] = useState(workoutWeek)

  const addWorkoutDay = () => {
    // console.log(...workout);
    setWorkout([...workout, { day: 'day' + workout.length, exercises: [], sets: [] }])
  }

  const removeWorkoutDay = () => {
    if(workout.length > 1) {
      setWorkout(workout.filter((e, i) => i !== selectedDay))
    }
  }

  return (
    <div className="pt-28 w-2/4 min-w-80 ">
      <div className='m-1 flex justify-between'>
        <button
          type="button"
          className="p-1 mt-4 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={addWorkoutDay}
        >
          Agregar día
        </button>
        <button
          type="button"
          className="p-1 mt-4 justify-center rounded-md border border-transparent bg-red-100 px-4 py-1 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={removeWorkoutDay}
        >
          Quitar día
        </button>
      </div>
      <Tab.Group
        // defaultIndex={0}
        onChange={(index) => {
          setSelectedDay(index)
        }}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {workout.map((workoutDay, i) => (
            <Tab
              key={i}
              className={({ selected }) => {
                return classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }}
            >
              {`Día ${i + 1}`}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {workout.map((workout, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3 m-1',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <MyDisclosoure workout={workout} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className='text-center'>
        <button title='Agregar ejercicio'>
          <PlusCircleIcon className='h-6 w-6 mt-2 text-purple-500 text-center' onClick={openModal} />
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h4"
                    className="text-md font-medium leading-6 text-gray-900"
                  >
                    Selecciona un ejercicio
                  </Dialog.Title>
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                  <div className="mt-4">
                    <ExerciseSelector addExercise={updateSelectedExercise} />
                    <button
                      type="button"
                      className="inline-flex mt-4 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => { addExercise() }}
                    >
                      Agregar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

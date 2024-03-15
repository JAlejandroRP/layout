import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'

const ExerciseTable = ({ sets, openModal }) => {
  return (
    <table className='w-full'>
      <tbody>
        <tr className='text-center p-2'>
          <th>
            Set
          </th>
          <th>
            Reps
          </th>
          <th>
            Rest
          </th>
          <th>
            Weight
          </th>
          <th>
            Edit
          </th>
        </tr>
        {sets.map((set, i) => (
          <tr className='text-center p-2' key={i}>
            <td>
              {i + 1}
            </td>
            <td>
              {/* <div contentEditable={true}> */}
                {set.reps}
              {/* </div> */}
            </td>
            <td>
              {set.rest} secs
            </td>
            <td>
              {set.weigth} Kg
            </td>
            <td>
              <div className='flex justify-center'>
                <PencilSquareIcon className='h-5 w-5 text-purple-400 text-center mr-2' role='button' />
                <TrashIcon className='h-5 w-5 text-purple-400 text-center' role='button' />
              </div>
            </td>
          </tr>
        ))}
        <tr className='text-center m-3'>
          <td colSpan={5}>
            <button onClick={openModal} title='Agregar Set'>
              <PlusCircleIcon className='h-5 w-5 text-purple-400 text-center' />
            </button>
          </td>
        </tr>
      </tbody>
    </table >
  )
}

const ExerciseDisclosure = ({ exerciseName, sets, openModal }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 my-2">
            <span>{exerciseName}</span>
            <ChevronUpIcon
              className={`${!open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
            <ExerciseTable sets={sets} openModal={openModal} />
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure>
  )
}

export default function MyDisclosoure({ workout }) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full bg-white">
        {workout.exercises.map((exercise, i) => (
          <ExerciseDisclosure exerciseName={exercise} sets={workout.sets[i]}  key={i} />
        ))}
      </div>
    </div>
  )
}

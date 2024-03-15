const exercises = [
  "Sentadillas",
  "Peso muerto",
  "Sancadas a un pie",
  "Press militar con barra",
  "Press de banca",
]

const day2 = {
  exercises: [exercises[2], exercises[3]],
  sets: [
    [
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
    ],
    [
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
    ],
  ]
}

const day1 = {
  exercises: [exercises[0], exercises[1]],
  sets: [
    [
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
    ],
    [
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
    ],
  ]
}

const emptyDay = {
  exercises: [],
  sets: []
}

export const workoutWeek = [day1, day2, day1, day2, day1]

export const emptyWorkout = [emptyDay]
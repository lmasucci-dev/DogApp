export interface User {
    id: string;
    name: string;
    lastName: string;
    username: string;
    password: string;
    routine: Routine | undefined;
  }

  export interface Routine {
    day: DayRoutine[];
  }

  export interface DayRoutine {
    heating: string;
    exercises: Excercise[]
    observations: string;
  }

  export interface Excercise {
    excerciseName: string;
    sets: number;
    repeats: number;
    weight: number | undefined;
  }
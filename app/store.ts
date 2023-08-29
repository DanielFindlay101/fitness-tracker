import { create } from "zustand";

interface workoutState {
  workoutModal: boolean;
  setWorkoutModal: (val: boolean) => void;
}

export const useStore = create<workoutState>()((set) => ({
  workoutModal: false,
  setWorkoutModal: (val) =>
    set((state) => ({
      workoutModal: (state.workoutModal = val),
    })),
}));

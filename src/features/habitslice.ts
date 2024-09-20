/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

 

export type Habits ={
  id: number;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habits[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk("habits/fetchHabits", async () => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
 const mockHabits: Habits[] = [
    {
      id: 1,
      name: "Read",
      frequency: "daily",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Exercise",
      frequency: "daily",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
  ];
  return mockHabits;
});

const habitSlice = createSlice({
  name: 'habitTracker',
  initialState,
  reducers: {
    addHabits: (
      state,
      action: PayloadAction<{ name: string; frequency: 'daily' | 'weekly' }>
    ) => {
      const newHabit: Habits = {
        id: Date.now(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
    removeHabits: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
    toggleHabits: (
      state,
      action: PayloadAction<{ id: number; date: string }>
    ) => {
      const habit = state.habits.find(
        (habitItem) => habitItem.id === action.payload.id
      );
      if (habit) {
        const isDateCompleted = habit.completedDates.includes(
          action.payload.date
        );
        if (isDateCompleted) {
          habit.completedDates = habit.completedDates.filter(
            (date) => date !== action.payload.date
          );
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.habits = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { addHabits, removeHabits, toggleHabits } = habitSlice.actions;
export default habitSlice.reducer;

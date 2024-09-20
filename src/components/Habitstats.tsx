import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import { AddDispatch, RootState } from '../store/store';
import { fetchContent, Habits } from '../features/habitslice';
import { useEffect } from 'react';

const HabitStats=() => {
  const { habits, isLoading, error } = useSelector(
    (state: RootState) => state.habits
  );

  const dispatch = useDispatch<AddDispatch>();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const getTotalHabits = () => habits.length;

  const getCompletedToday = () => {
    const today = new Date().toISOString().split('T')[0];
    return habits.filter((habit) => habit.completedDates.includes(today))
      .length;
  };

  const getLongestStreak = () => {
    const getStreak = (habit: Habits) => {
      let streak = 0;
      const currentDate = new Date();

      while (true) {
        const dateString = currentDate.toISOString().split('T')[0];
        if (habit.completedDates.includes(dateString)) {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        } else {
          break;
        }
      }

      return streak;
    };

    return Math.max(...habits.map(getStreak), 0);
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Typography color='error'>{error}</Typography>;
  }

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
      <Typography variant='h6' gutterBottom>
        Habit Statistics
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='body1'>
          Total Habits: {getTotalHabits()}
        </Typography>
        <Typography variant='body1'>
          Completed Today: {getCompletedToday()}
        </Typography>
        <Typography variant='body1'>
          Longest Streak: {getLongestStreak()} days
        </Typography>
      </Box>
    </Paper>
  );
};

export default HabitStats;

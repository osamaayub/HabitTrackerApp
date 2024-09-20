import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import Habitstats from './components/Habitstats';

const App = () => {
  return (
    <Container maxWidth='md'>
      <Typography component='h1' variant='h2' align='center'>
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList/>
      <Habitstats/>
    </Container>
  );
};
export default App;

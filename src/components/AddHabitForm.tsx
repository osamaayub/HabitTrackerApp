import { FormEvent } from 'react';

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { AddDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { addHabits } from '../features/habitslice';


const AddHabitForm = () => {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
  const dispatch = useDispatch <AddDispatch>();

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabits({name,frequency}));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2',
        }}
      >
        <TextField
          label='Habit Name'
          placeholder='Enter Habit Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
          >
            <MenuItem value='daily'>Daily</MenuItem>
            <MenuItem value='weekly'>Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit' variant='contained' color='primary' sx={{mb:"4"}}>
          Add Habit
        </Button>
      </Box>
    </form>
  );
};
export default AddHabitForm;

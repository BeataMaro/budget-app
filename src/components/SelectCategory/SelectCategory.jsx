import React from 'react';
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';

export default function SelectCategory() {
  const { useState } = React;

  const [category, setCategory] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
  };

  return (
    <FormControl>
      <InputLabel htmlFor='categorySelect' id='categoryFilter'>
        Category
      </InputLabel>
      <Select
        labelId='categorySelect'
        id='categorySelect'
        value='Food'
        label='Food'
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value='Food'>Food</MenuItem>
        <MenuItem value='Car'>Car</MenuItem>
      </Select>
    </FormControl>
  );
}

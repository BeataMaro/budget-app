import React from 'react';
import {
  useForm, Controller,
} from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';

interface ISelectCategoryProps {
     handleFilteringByCategory: (val: string) => void
}

export default function FilterByCategory({ handleFilteringByCategory }: ISelectCategoryProps) {
  const { state } = useStateContext();
  const { categories } = state;
  const { control, setValue } = useForm({
    defaultValues: {
      categorySearch: 'All',
    },
  });

  return (
    <Controller
      control={control}
      name="categorySearch"
      render={({ field }) => (
        <TextField
        /* eslint-disable */
          {...field}
          onChange={(e) => {
            const value = e.target.value;
            field.onChange(value);
            setValue('categorySearch', value);
            handleFilteringByCategory(value);
          }}
          value={field.value}
          sx={{ width: 150 }}
          InputLabelProps={{
            shrink: true,
          }}
          id="expenseCategory"
          name="expenseCategory"
          label="Category"
          select
          defaultValue="All"
      >
        {!!categories.length &&
          categories
          .map(({ id, name }) => (
            <MenuItem key={id} value={name}>
                {name}
            </MenuItem>
            ))}
      </TextField>
    )}/>
  );
}

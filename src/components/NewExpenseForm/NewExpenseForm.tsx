import {
  Box,
  Button,
  MenuItem,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Category from '../../models/category.ts';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';
import NewCategoryForm from '../NewCategoryForm/NewCategoryForm.tsx';

type expenseInputs = {
  expenseName: string;
  expensePrice: number;
  expenseCategory: string;
};

function NewExpenseForm() {
  const { state, setState } = useStateContext();
  const [addingCategoryForm, setAddingCategoryForm] = useState<boolean>(false);
  const { categories } = state;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<expenseInputs>({
    defaultValues: {
      expenseName: '',
      expensePrice: 0,
      expenseCategory: 'Food',
    },
  });

  useEffect(() => {
    state.expenses.map((exp) => console.log(exp));
  }, [state]);

  const onSubmitExpense: SubmitHandler<expenseInputs> = (data) => {
    const newExpense = {
      id: v4(),
      name: data.expenseName,
      category: data.expenseCategory,
      amount: data.expensePrice.toString(),
      date: new Date().toISOString().slice(0, 10),
    };
    setState({
      categories: [...state.categories],
      expenses: [...state.expenses, newExpense],
    });
    reset();
  };

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        name="newExpenseForm"
        noValidate
        sx={{
          display: 'flex',
          p: 4,
          mt: '6rem',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          gap: '1rem',
          alignItems: { lg: 'center' },
        }}
        onSubmit={handleSubmit(onSubmitExpense)}
      >
        {/* eslint-disable  */}
      <Controller
        control={control}
        name='expenseName'
        rules={{ required: true }}
        render={({ field }) => 
          <TextField
          {...field}
            id="newExpenseName"
            name="expenseName"
            label="Nazwa"
            variant="standard"
          />}
      />
      {errors.expenseName && <span>To pole jest wymagane!</span>}
      <Controller
        control={control}
        name='expensePrice'
        rules={{ required: true }}
        render={({ field }) => <TextField
        {...field}
        required
        id="exExpensePrice"
        type="number"
        name="expensePrice"
        label="Koszt"
        variant="standard"
        inputProps={{ min: 0 }}
      />}
      />
      {errors.expensePrice && <span>To pole jest wymagane!</span>}
      <Controller
        control={control}
        name='expenseCategory'
        render={({ field }) => (
          <TextField
            {...field}
            id="newExpenseCategory"
            name="expenseCategory"
            label="Kategoria"
            select
            defaultValue="Food"
        >
            <MenuItem onClick={() => setAddingCategoryForm(true)}>
              Dodaj nową kategorię...
            </MenuItem>
            {!!categories.length &&
              categories
                .filter((cat: Category) => cat.name !== 'All')
                .map(({ id, name }) => (
                  <MenuItem key={id} value={name}>
                    {name}
                  </MenuItem>
                ))}
          </TextField>
        )}
      />
      <Button variant="outlined" type="submit" disabled={addingCategoryForm}>
          Dodaj
      </Button>
    </Box>
    {addingCategoryForm && <NewCategoryForm setAddingForm={setAddingCategoryForm}/>}
    </>
  );
}

export default NewExpenseForm;

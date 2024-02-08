import React, {
  useState, useEffect,
} from 'react';
import { v4 } from 'uuid';
import {
  Box, TextField, Button, MenuItem,
} from '@mui/material';
import IExpense from '../../models/expense.ts';
import * as initialCategories from '../../../initialCategories.json';

interface ICategory {
  id: string,
  name: string,
}

interface AddExpenseProps {
  handleAddingNewExpense: (expense: IExpense) => void
}

const baseCategories = initialCategories.initialCategories.map((catName: string) => ({
  id: v4(),
  name: catName,
}));

function AddExpenseForm({ handleAddingNewExpense }: AddExpenseProps) {
  const storedCategories = localStorage.getItem('categories');

  const parsedCategories = storedCategories ? JSON.parse(storedCategories) : baseCategories && localStorage.setItem('categories', JSON.stringify(baseCategories));
  const [categories, setCategories] = useState<ICategory[]>(parsedCategories);
  const [addingCategoryForm, setAddingCategoryForm] = useState<boolean>(false);

  const [newCategory, setNewCategory] = useState<ICategory>({ id: '', name: '' });
  // const [categories, setCategories] = useState<ICategory[]>(categoriesDemo);

  // function getCategories() {
  //     state.map((expense) => setCategories([...categories, expense.category]))
  // }

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  function addNewCategory() {
    function addCategory() {
      setCategories([...categories, newCategory]);
      localStorage.setItem('categories', JSON.stringify(categories));
      setAddingCategoryForm(false);
    }
    return (
      <>
        <TextField
          required
          name="expenseNewCategory"
          label="Add your category"
          variant="standard"
          onChange={(e) => setNewCategory({
            id: v4(),
            name: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          })}
        />
        <Button onClick={() => addCategory()}>Add new category</Button>
      </>
    );
  }

  function addNewExpense(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    handleAddingNewExpense({
      id: Date.now().toString(),
      name: form.expenseName.value,
      category: form.expenseCategory.value,
      amount: form.expensePrice.value,
      date: new Date().toISOString().slice(0, 10),
    });

    form.reset();
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      name="newExpenseForm"
      noValidate
      sx={{
        display: 'flex', p: 4, mt: '6rem', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center', gap: '1rem', alignItems: { lg: 'center' },
      }}
      onSubmit={(e) => addNewExpense(e)}
    >
      <TextField
        required
        id="newExpenseName"
        name="expenseName"
        label="Add your expense"
        variant="standard"
      />
      <TextField required id="nexExpensePrice" type="number" name="expensePrice" label="Price" variant="standard" />
      <TextField
        id="newExpenseCategory"
        name="expenseCategory"
        label="Category"
        select
        defaultValue="Food"
      >
        {categories.map(({ id, name }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
        <MenuItem
        /* eslint-disable max-len, no-confusing-arrow */
          onClick={() => addingCategoryForm ? setAddingCategoryForm(false) : setAddingCategoryForm(true)}
          key={78777}
          value="newCategory"
        >
          Add new category...
        </MenuItem>
      </TextField>
      {addingCategoryForm && addNewCategory()}
      <Button variant="outlined" type="submit">
        Add
      </Button>
    </Box>
  );
}

export default AddExpenseForm;

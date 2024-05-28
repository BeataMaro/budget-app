import React, { FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import {
  Box, TextField, Button, MenuItem, FormControl,
} from '@mui/material';
import Expense from '../../models/expense.ts';
import useLocalStorage from '../../ libs/hooks/useLocalStorage.tsx';
import Category from '../../models/category.ts';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';
// import NewExpenseForm from '../NewExpenseForm/NewExpenseForm.tsx';

interface AddExpenseProps {
  handleAddingNewExpense: (expense: Expense) => void;
}

function AddExpenseForm({ handleAddingNewExpense }: AddExpenseProps) {
  const { state, setState } = useStateContext();
  const [categories, setCategories] = useLocalStorage<Category[]>('categories', state.categories);
  const [addingCategoryForm, setAddingCategoryForm] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<Category>({ id: '', name: '' });

  // const newExpenseRef = useRef<HTMLInputElement>();

  function addNewCategory() {
    function addCategory() {
      // const val = newCategoryRef.current!.value;
      if (newCategory.name === '') return;
      setCategories([...categories, newCategory]);
      setAddingCategoryForm(false);
      setState((prev) => ({ ...prev, categories: [...categories, newCategory] }));
    }

    function onsubmitForm(e: FormEvent<HTMLButtonElement>) {
      e.preventDefault();
      addCategory();
    }
    return (
      <FormControl>
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
        <Button
          onClick={(e) => onsubmitForm(e)}
        >
          Add new category
        </Button>
      </FormControl>
    );
  }

  function addNewExpense(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    // empty expenseName field
    if (form.expenseName.value === '') return;
    handleAddingNewExpense({
      id: v4(),
      name: form.expenseName.value,
      category: form.expenseCategory.value,
      amount: form.expensePrice.value,
      // amount: newExpenseCostRef.current!.value,
      // [e.target.name]: e.target.value,
      // name: form.name.value,
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
        display: 'flex',
        p: 4,
        mt: '6rem',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'center',
        gap: '1rem',
        alignItems: { lg: 'center' },
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
      <TextField
        required
        id="exExpensePrice"
        type="number"
        name="expensePrice"
        label="Price"
        variant="standard"
        inputProps={{ min: 0 }}
      />
      <TextField
        id="newExpenseCategory"
        name="expenseCategory"
        label="Category"
        select
        defaultValue="Food"
      >
        {!!categories.length && categories
          .filter((cat: Category) => cat.name !== 'All')
          .map(({ id, name }) => (
            <MenuItem key={id} value={name} onClick={() => setAddingCategoryForm(false)}>
              {name}
            </MenuItem>
          ))}
        <MenuItem
          onClick={() => setAddingCategoryForm(true)}
          key={v4()}
          value="Add new category"
        >
          Add new category...
        </MenuItem>
      </TextField>
      {addingCategoryForm && addNewCategory()}
      <Button variant="outlined" type="submit" disabled={addingCategoryForm}>
        Add Expense
      </Button>
    </Box>
  );
}

export default AddExpenseForm;

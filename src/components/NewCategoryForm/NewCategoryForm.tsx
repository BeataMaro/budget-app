import React from 'react';
import { v4 } from 'uuid';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';
import useLocalStorage from '../../ libs/hooks/useLocalStorage.tsx';

type newCategoryInput = {
    newExpenseCategory: string,
  }

  interface INewCategoryProps {
    setAddingForm: (val: boolean) => void
}

function NewCategoryForm({ setAddingForm }: INewCategoryProps) {
  const { state, setState } = useStateContext();
  const [categories, setCategories] = useLocalStorage('categories', state.categories);

  const {
    control, reset, handleSubmit, formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      newExpenseCategory: '',
    },
  });

  const onSubmitNewCategory: SubmitHandler<newCategoryInput> = (data) => {
    if (!data) return;
    const newCategory = {
      id: v4(),
      name: data.newExpenseCategory.charAt(0).toUpperCase() + data.newExpenseCategory.slice(1),
    };
    setCategories([...categories, newCategory]);
    setState({
      expenses: [...state.expenses],
      categories: [...state.categories, newCategory],
    });
    reset();
    setAddingForm(false);
  };
  return (
    <form name="newCategory" onSubmit={handleSubmit(onSubmitNewCategory)}>
      <Controller
        control={control}
        name="newExpenseCategory"
        render={({ field }) => (
          /* eslint-disable  */
          <TextField
          {...field}
            required
            id="newExpenseName"
            name="expenseName"
            label="Name"
            variant="standard"
          />
        
          )}
        />
      {errors.newExpenseCategory && <span>The field is required!</span>}
        <Button variant="outlined" type="submit" disabled={isSubmitting}>
            Ok
        </Button>      
      </form>
  )
};

  export default NewCategoryForm;
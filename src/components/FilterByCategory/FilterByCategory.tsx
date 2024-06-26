import React from 'react';
import {
  useForm, Controller,
} from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
// import {
//   FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
// } from '@mui/material';
// import useLocalStorage from '../../ libs/hooks/useLocalStorage.tsx';
// import useStateContext from '../../ libs/hooks/useStateContext.tsx';
// import FormInputText from '../AddExpenseForm/form-component/FormInputText.tsx';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';

interface ISelectCategoryProps {
     handleFilteringByCategory: (val: string) => void
}

// type newCategoryType = {
//   category: string,
// }

export default function FilterByCategory({ handleFilteringByCategory }: ISelectCategoryProps) {
  const { state } = useStateContext();
  // const [categories] = useLocalStorage<Category[]>('categories', state.categories);
  const { categories } = state;
  // const [selectedCategory, setCategory] = useState<string>('All');
  // const [selectedCat, setSelectedCat] = useLocalStorage<string>('selected category',
  // selectedCategory);

  // useEffect(() => {
  //   // setCategory(selectedCat);
  //   console.log('Filter by category!');
  // }, [categories, selectedCat]);

  // const filterByCategory = (event: SelectChangeEvent<string>) => {
  // const filterByCategory = (val: string) => {
  // const selectedValue = event.target.value;
  // setSelectedCat(selectedValue);
  // setSelectedCat(val);
  // setState((prevState) => ({
  //   categories: prevState.categories,
  //   expenses: prevState.expenses.filter(
  //     (row) => row.category.toLowerCase() === selectedValue.toLowerCase(),
  //   ),
  // }));
  // handleFilteringByCategory(selectedValue);
  // handleFilteringByCategory(val);
  // };
  const { control } = useForm({
    defaultValues: {
      category: '',
    },
  });

  // const onSubmit: SubmitHandler<newCategoryType> = (data) => {
  //   console.log(data);
  //   filterByCategory(data.category);
  // };

  return (
    // <Box
    //   component="form"
    //   autoComplete="off"
    //   name="searchCategoryForm"
    //   noValidate
    //   sx={{
    //     display: 'flex',
    //     p: 4,
    //     mt: '6rem',
    //     flexDirection: { xs: 'column', lg: 'row' },
    //     justifyContent: 'center',
    //     gap: '1rem',
    //     alignItems: { lg: 'center' },
    //   }}
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
      //  <FormInputText control={control} name="category" label="kategoria" />
        <TextField
        /* eslint-disable */
            {...field}
          onChange={(e) => handleFilteringByCategory(e.target.value)}
          id="newExpenseCategory"
          name="expenseCategory"
          label="Kategoria"
          select
          defaultValue="All"
          sx={{color: 'pink'}}
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
    
    // {/* <Button type="submit">ok</Button> */}
    // </Box>
  );
}

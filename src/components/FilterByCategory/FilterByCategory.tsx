import React, { useState, useEffect } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import ICategory from '../../models/category.ts';
import * as initialCategoriesSet from '../../../initialCategories.json';

interface ISelectCategoryProps {
     handleFilteringByCategory: (val: string) => void
}

export default function FilterByCategory({ handleFilteringByCategory }: ISelectCategoryProps) {
  const storedData = localStorage.getItem('categories');
  const parsedData = storedData ? JSON.parse(storedData) : initialCategoriesSet;

  const [categories, setCategories] = useState<ICategory[]>(parsedData);
  const [selectedCategory, setCategory] = useState<string>('All');

  const filterByCategory = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setCategory(event.target.value);
    handleFilteringByCategory(selectedValue);

    // setCategory(val);
    // console.log(selectedCategory);
    // handleFilteringByCategory(selectedCategory);

    // if (val.toLowerCase() === 'all') {
    //   setExpenses([...state]);
    // } else {
    // /* eslint-disable max-len, react/destructuring-assignment */
    //   const filteredRows = state.filter((row: IExpense) =>
    // row.category.toLowerCase() === val.toLowerCase());
    //   setExpenses(filteredRows);
    // }
  };

  useEffect(() => {
    const updateCategory = () => {
      setCategories(JSON.parse(localStorage.getItem('categories')!));
    };
    updateCategory();
  }, [categories]);

  return (
    <FormControl sx={{ width: '300px', my: 3 }}>
      <InputLabel htmlFor="categorySelect" id="categoryFilter">
        Category
      </InputLabel>
      <Select
        labelId="categorySelect"
        id="categorySelect"
        value={selectedCategory}
        label={selectedCategory}
        onChange={filterByCategory}
      >
        {categories.length && categories.map(({ name, id }) => (
          <MenuItem value={name} key={id}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

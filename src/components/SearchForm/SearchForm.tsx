import React from 'react';
import {
  FormControl, Icon, Input, InputAdornment, InputLabel,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

type SearchProps = {
    handleSearch: (searchVal: string) => void
}

type searchNameType = {
 searchCategory: string,
}

function SearchForm({ handleSearch }: SearchProps) {
  const { control } = useForm<searchNameType>({ defaultValues: { searchCategory: '' } });

  const handleSearchCategoryName = (e:React.ChangeEvent<HTMLInputElement
    | HTMLTextAreaElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <Controller
      name="searchCategory"
      control={control}
      render={({ field }) => (
        /*eslint-disable*/
        <FormControl sx={{ mr: 3 }} {...field}>
        <InputLabel htmlFor="search-expense">Szukaj</InputLabel>
        <Input
          id="search-expense"
          type="search"
          placeholder="Szukaj"
          sx={{ px: 2, py: 1 }}
          margin="dense"
          startAdornment={(
            <InputAdornment position="start">
              <Icon>
                <span className="material-symbols-outlined">search</span>
              </Icon>
            </InputAdornment>
      )}
          onChange={(e) => handleSearchCategoryName(e)}
        />
      </FormControl>
      )}
    />
  );
}

export default SearchForm;

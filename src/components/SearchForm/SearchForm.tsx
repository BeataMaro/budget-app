import React from 'react';
import {
  FormControl, Icon, Input, InputAdornment, InputLabel,
} from '@mui/material';

type SearchProps = {
    handleSearch: (searchVal: string) => void
}

function SearchForm({ handleSearch }: SearchProps) {
  return (
    <FormControl sx={{ mr: 3 }}>
      <InputLabel htmlFor="search-expense">Find expenses</InputLabel>
      <Input
        id="search-expense"
        type="search"
        placeholder="Search"
        sx={{ px: 2, py: 1 }}
        margin="dense"
        startAdornment={(
          <InputAdornment position="start">
            <Icon>
              <span className="material-symbols-outlined">search</span>
            </Icon>
          </InputAdornment>
    )}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </FormControl>
  );
}

export default SearchForm;

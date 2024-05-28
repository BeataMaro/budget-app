import React from 'react';
import { FormControl, IconButton } from '@mui/material';

type ToggleFiltersIconProps = {
    handleToggleFilters: (val: boolean) => void,
    open: boolean,
}

export default function ToggleFiltersIcon({ handleToggleFilters, open }: ToggleFiltersIconProps) {
  const toggleFilters = () => {
    const show = !open;
    handleToggleFilters(show);
  };
  return (
    <FormControl sx={{
      p: 2, mt: 5, display: 'flex', alignItems: 'flex-end',
    }}
    >
      <IconButton className="material-symbols-outlined" onClick={toggleFilters} sx={{ cursor: 'pointer' }}>
        filter_list
      </IconButton>
    </FormControl>
  );
}

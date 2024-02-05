import React, { useState } from 'react';
import { FormControl, IconButton } from '@mui/material';

type ToggleFiltersIconProps = {
    handleToggleFilters: (val: boolean) => void,
}

export default function ToggleFiltersIcon({ handleToggleFilters }: ToggleFiltersIconProps) {
  const [filtersOpened, setFiltersOpened] = useState<boolean>(true);
  const toggleFilters = () => {
    setFiltersOpened((prev) => !prev);
    handleToggleFilters(filtersOpened);
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

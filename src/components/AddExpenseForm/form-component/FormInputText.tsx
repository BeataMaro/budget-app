import React from 'react';
import { Control, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { v4 } from 'uuid';

export type FormInputProps = {
  name: string,
  control: Control,
  label: string
}

function FormInputText({ name, control, label }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
        /* eslint-disable */
          {...field}
          label={label}
          id={v4()}
          name={name}
          variant="standard"
        />
      )}
    />
  );
}

export default FormInputText;

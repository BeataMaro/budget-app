import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import IExpense from '../../models/expense.ts';

type totalProps = {
    newCategory: string,
    expenses: IExpense[],}

function Total({ newCategory, expenses }: totalProps) {
  const [total, setTotal] = useState<number>(0);
  const [totalCategory, setTotalCategory] = useState<number>(0);

  const totalExpenses = (data: IExpense[]): void => {
    const totalSum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    localStorage.setItem('totalExpenses', JSON.stringify(totalSum));
    setTotal(totalSum);
  };
  const totalExpensesOfCategory = (data: IExpense[]) => {
    const sum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    localStorage.setItem('totalExpensesOfCategory', JSON.stringify(sum));
    setTotalCategory(sum);
  };

  useEffect(() => {
    if (newCategory.toLowerCase() !== 'all') {
      /* eslint-disable max-len */
      const filteredRows = expenses.filter((row: IExpense) => row.category.toLowerCase() === newCategory.toLowerCase());
      totalExpensesOfCategory(filteredRows);
    }
    totalExpenses([...expenses]);
  }, [expenses, newCategory]);

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', py: 3,
    }}
    >
      {newCategory !== 'All' && newCategory.length > 0 && (
        <Typography variant="h5">
          Total cost of the&nbsp;
            {
             newCategory.toLowerCase()
            }
          :
          {
         totalCategory
           }
          PLN
        </Typography>
      )}
      <Typography variant="h5" sx={{ fontWeight: '800' }}>
        Total expenses:
        { total }
        PLN
      </Typography>
    </Box>
  );
}

export default Total;

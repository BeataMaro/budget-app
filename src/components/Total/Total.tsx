import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Expense from '../../models/expense.ts';

type totalProps = {
    categoryFilter: string,
    expenses: Expense[],}

function Total({ categoryFilter, expenses }: totalProps) {
  const [total, setTotal] = useState<number>(0);
  const [totalCategory, setTotalCategory] = useState<number>(0);

  const totalExpenses = (data: Expense[]): void => {
    const totalSum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    localStorage.setItem('totalExpenses', JSON.stringify(totalSum));
    setTotal(totalSum);
  };
  const totalExpensesOfCategory = (data: Expense[]) => {
    const sum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    localStorage.setItem('totalExpensesOfCategory', JSON.stringify(sum));
    setTotalCategory(sum);
  };

  useEffect(() => {
    if (categoryFilter.toLowerCase() !== 'all') {
      /* eslint-disable max-len */
      const filteredRows = expenses.filter((row: Expense) => row.category.toLowerCase() === categoryFilter.toLowerCase());
      totalExpensesOfCategory(filteredRows);
    }
    totalExpenses([...expenses]);
  }, [expenses, categoryFilter]);

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', py: 3,
    }}
    >
      {categoryFilter !== 'All' && categoryFilter.length > 0 && (
        <Typography variant="h5">
          Total cost of the&nbsp;
            {
             categoryFilter.toLowerCase()
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

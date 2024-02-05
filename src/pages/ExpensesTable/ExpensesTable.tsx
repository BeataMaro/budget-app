import React, { useEffect, useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import IExpense from '../../models/expense.ts';
import FilterByCategory from '../../components/FilterByCategory/FilterByCategory.tsx';
import Total from '../../components/Total/Total.tsx';
import SearchForm from '../../components/SearchForm/SearchForm.tsx';
import AddExpenseForm from '../../components/AddExpenseForm/AddExpenseForm.tsx';
import ToggleFiltersIcon from '../../components/ToggleFiltersIcon/ToggleFiltersIcon.tsx';

interface ExpensesTableProps {
  state: IExpense[];
}

export default function ExpensesTable({ state }: ExpensesTableProps) {
  const storedExpenses = localStorage.getItem('expenses');
  const parsedExpenses = storedExpenses ? JSON.parse(storedExpenses) : state;

  const [filtersOpened, setFiltersOpened] = useState<boolean>(true);
  const [newCategory, setNewCategory] = useState<string>('');
  const [expenses, setExpenses] = useState<IExpense[]>([...parsedExpenses]);
  // const [startDate, setStartDate] = useState('2022-07-16');
  // const [endDate, setEndDate] = useState('2022-09-10');

  useEffect(() => {
    if (newCategory.toLowerCase() === 'all') {
      setExpenses([...parsedExpenses]);
    }
  }, [newCategory, parsedExpenses]);

  function sortTable(data: IExpense[], direction: string | undefined): IExpense[] {
    if (direction === 'up') {
      return data.sort((a: IExpense, b: IExpense) => Number(a.amount) - Number(b.amount));
    }
    if (direction === 'down') {
      return data.sort((a, b) => Number(b.amount) - Number(a.amount));
    }
    return data;
  }

  function handleSortDirection(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLButtonElement;

    sortTable(expenses, target.dataset.sort);
    setExpenses([...expenses]);
  }

  const handleFilteringByCategory = (val: string) => {
    setNewCategory(val);
    /* eslint-disable max-len, react/destructuring-assignment */
    const filteredRows = parsedExpenses.filter((row: IExpense) => row.category.toLowerCase() === val.toLowerCase());
    setExpenses(filteredRows);
  };

  const filterByName = (searchedVal: string) => {
    /* eslint-disable react/destructuring-assignment */
    const filteredExpenses = parsedExpenses.filter((expense: IExpense) => expense.name.toLowerCase()
      .includes(searchedVal.toLowerCase()));
    setExpenses(filteredExpenses);
  };

  // const handleDateChange = (ranges) => {
  //   console.log(ranges);
  // };

  const addNewExpense = (newExpense: IExpense):void => {
    const {
      id, name, category, amount, date,
    } = newExpense;

    const updatedExpenses = [...expenses, {
      id, name, category, amount, date,
    }];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <Box id="expensesTable" component="section">
      <AddExpenseForm handleAddingNewExpense={addNewExpense} />
      <ToggleFiltersIcon handleToggleFilters={setFiltersOpened} />
      {filtersOpened && (
        <Paper>
          <SearchForm handleSearch={filterByName} />
          <FilterByCategory handleFilteringByCategory={handleFilteringByCategory} />
        </Paper>
      )}
      <Paper>
        <TableContainer component={Paper}>
          <Typography variant="h4" sx={{ m: 3 }}>
            Expenses
          </Typography>
          <Table
            stickyHeader
            sx={{ minWidth: { mobile: 300, desktop: 500 }, p: 3 }}
            size="medium"
            aria-label="expenses table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">
                    <Icon className="material-symbols-outlined">category</Icon>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">
                    <Icon className="material-symbols-outlined">calendar_month</Icon>
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    <IconButton className="material-symbols-outlined">price_check</IconButton>
                    <IconButton
                      data-sort="down"
                      sx={{ fontSize: '1rem' }}
                      onClick={(e) => handleSortDirection(e)}
                      className="material-symbols-outlined"
                    >
                      arrow_downward
                    </IconButton>
                    <IconButton
                      data-sort="up"
                      sx={{ fontSize: '1rem' }}
                      onClick={(e) => handleSortDirection(e)}
                      className="material-symbols-outlined"
                    >
                      arrow_upward
                    </IconButton>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    textTransform: 'capitalize',
                    '&:hover': { backgroundColor: '#25d29180' },
                    transition: '.3s ease-out',
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                    {
                  row.amount
                    }
                    PLN
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Total expenses={[...parsedExpenses]} newCategory={newCategory} />
    </Box>
  );
}

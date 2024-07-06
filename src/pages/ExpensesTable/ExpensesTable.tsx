import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
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
import DeleteIcon from '@mui/icons-material/Delete';
import Expense from '../../models/expense.ts';
import FilterByCategory from '../../components/FilterByCategory/FilterByCategory.tsx';
import Total from '../../components/Total/Total.tsx';
import SearchForm from '../../components/SearchForm/SearchForm.tsx';
import ToggleFiltersIcon from '../../components/ToggleFiltersIcon/ToggleFiltersIcon.tsx';
import useLocalStorage from '../../ libs/hooks/useLocalStorage.tsx';
import useStateContext from '../../ libs/hooks/useStateContext.tsx';
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm.tsx';

export default function ExpensesTable() {
  const { state, setState } = useStateContext();
  const { expenses, categories } = state;
  // const [localExpenses, setLocalExpenses] =
  // useLocalStorage<Expense[]>('expenses', state.expenses);
  const [localExpenses, setLocalExpenses] = useLocalStorage<Expense[]>('expenses', expenses);
  const [filtersOpened, setFiltersOpened] = useState(true);
  const [filtering, setFiltering] = useState(false);

  const [categoryFilter] = useState('');
  const [filteredExpenses,
    setFilteredExpenses] = useState<Expense[]>(expenses);

  // const [startDate, setStartDate] = useState('2022-07-16');
  // const [endDate, setEndDate] = useState('2022-09-10');

  useEffect(
    () => {
      console.log(localExpenses);
      console.log('expenses', expenses);
      if (categoryFilter.toLowerCase() === 'all') {
        setFilteredExpenses(expenses);
        console.log('All!');
      }
      // setFilteredExpenses(expenses);
      // console.log(expenses, categories);
    },
    [state, filteredExpenses, expenses, categoryFilter, categories, localExpenses],
  );

  function sortTable(data: Expense[], property: 'amount' | 'date', direction?: string): Expense[] {
    if (direction === 'up') {
      return data.sort((a: Expense, b: Expense) => Number(a[property]) - Number(b[property]));
    }
    if (direction === 'down') {
      return data.sort((a, b) => Number(b[property]) - Number(a[property]));
    }
    return data;
  }

  // function sortTable(data: Expense[], direction?: string): Expense[] {
  //   if (direction === 'up') {
  //     return data.sort((a: Expense, b: Expense) => Number(a.amount) - Number(b.amount));
  //   }
  //   if (direction === 'down') {
  //     return data.sort((a, b) => Number(b.amount) - Number(a.amount));
  //   }
  //   return data;
  // }

  function handleDeleteExpense(rowId: string) {
    setLocalExpenses([...expenses].filter((exp: Expense) => exp.id !== rowId));
    setState({
      expenses: [...expenses].filter((exp: Expense) => exp.id !== rowId),
      categories: [...categories],
    });
  }

  function handleSortDirectionByPrice(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLButtonElement;

    sortTable(expenses, 'amount', target.dataset.sort);
    setFilteredExpenses([...expenses]);
  }

  const handleSortDirectionByDate = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // const target = e.target as HTMLButtonElement;

    // sortTable(expenses, 'date', target.dataset.sort);
    const target = e.target as HTMLButtonElement;

    if (target.dataset.sort === 'up') {
      expenses.sort((a: Expense, b: Expense) => new Date(a.date).getTime()
    - new Date(b.date).getTime());
      target.dataset.sort = 'down';
      setFilteredExpenses([...expenses]);
    } else if (target.dataset.sort === 'down') {
      expenses.sort((a: Expense, b: Expense) => new Date(b.date).getTime()
    - new Date(a.date).getTime());
      target.dataset.sort = 'up';

      setFilteredExpenses([...expenses]);
    }
  };
  const filterByCategory = (value: string) => {
    const filteredRows = expenses.filter(
      (row: Expense) => row.category.toLowerCase() === value.toLowerCase(),
    );
    setFiltering(true);
    if (value === 'All') {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(filteredRows);
    }
  };

  const filterByName = (searchedVal: string) => {
    setFiltering(true);
    const filteredExps = expenses.filter(
      (expense: Expense) => expense.name.toLowerCase()
        .includes(searchedVal.toLowerCase())
         || expense.category.toLowerCase().includes(searchedVal.toLowerCase()),
    );
    setFilteredExpenses(filteredExps);
    if (searchedVal.length > 0) {
      setFiltering(true);
    } else {
      setFiltering(false);
    }
  };

  return (
    <Box id="expensesTable" component="section" sx={{ mt: 12, textAlign: 'center' }}>
      {/* clear expenses */}
      <Button
        sx={{
          m: 'auto',
          p: 2,
          fontSize: '1.2rem',
          backgroundColor: '#25d291',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        type="button"
        onClick={() => {
          setState({ ...state, expenses: [] });
          setFilteredExpenses([]);
        }}
      >
        Clear expenses
      </Button>
      <NewExpenseForm />
      <ToggleFiltersIcon handleToggleFilters={setFiltersOpened} open={filtersOpened} />
      {filtersOpened && (
        <Paper sx={{
          display: 'flex', p: 4, flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center', alignItems: { lg: 'center' }, gap: '1rem',
        }}
        >
          <SearchForm handleSearch={filterByName} />
          <FilterByCategory handleFilteringByCategory={filterByCategory} />
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
                    <Icon
                      data-property="calendar"
                      data-sort="up"
                      className="material-symbols-outlined"
                      onClick={(e) => handleSortDirectionByDate(e)}
                    >
                      calendar_month
                    </Icon>
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    <IconButton className="material-symbols-outlined">price_check</IconButton>
                    <IconButton
                      data-sort="down"
                      data-property="amount"
                      sx={{ fontSize: '1rem' }}
                      onClick={(e) => handleSortDirectionByPrice(e)}
                      className="material-symbols-outlined"
                    >
                      arrow_downward
                    </IconButton>
                    <IconButton
                      data-sort="up"
                      data-property="amount"
                      sx={{ fontSize: '1rem' }}
                      onClick={(e) => handleSortDirectionByPrice(e)}
                      className="material-symbols-outlined"
                    >
                      arrow_upward
                    </IconButton>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(!filtering && !!expenses.length) ? expenses?.map((row) => (
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
                  <TableCell>
                    <IconButton onClick={() => handleDeleteExpense(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )) : filteredExpenses?.map((row) => (
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
                  <TableCell>
                    <IconButton onClick={() => handleDeleteExpense(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Total expenses={[...expenses]} categoryFilter={categoryFilter} />
    </Box>
  );
}

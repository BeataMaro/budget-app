import { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PropTypes, { object } from 'prop-types';

ExpensesTable.propTypes = {
  state: PropTypes.arrayOf(object),
};

export default function ExpensesTable({ state }) {
  const [filtersOpened, setFiltersOpened] = useState(false);
  const [category, setCategory] = useState('');
  const [rows, setRows] = useState([...state]);
  const [total, setTotal] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  // const [startDate, setStartDate] = useState('2022-07-16');
  // const [endDate, setEndDate] = useState('2022-09-10');

  const totalExpenses = (data) => {
    const sum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    setTotal(sum);
  };
  const totalExpensesOfCategory = (data) => {
    const sum = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
    setTotalCategory(sum);
  };

  useEffect(() => {
    totalExpenses([...state]);
  }, [state]);

  useEffect(() => {
    if (category.toLowerCase() !== 'All'.toLocaleLowerCase()) {
      totalExpensesOfCategory(rows);
    }
  }, [rows, category]);
  //   function sortTable(data, property, direction) {
  //     if (direction === 'up') {
  //       data = data.sort((a, b) => a[property] - b[property]);
  //     }
  //     if (direction === 'down') {
  //       data = data.sort((a, b) => b[property] - a[property]);
  //     }
  //   }

  //   function handleSortDirection(e) {
  //     if (e.target.dataset.sort === 'up') {
  //       sortTable(state);
  //     }
  //   }

  const filterByCategory = (val) => {
    setCategory(val);

    if (val.toLowerCase() === 'all') {
      setRows([...state]);
    } else {
      const filteredRows = state.filter((row) => {
        return row.category.toLowerCase() === val.toLowerCase();
      });
      setRows(filteredRows);
    }
  };

  const filterByName = (searchedVal) => {
    setCategory('All');
    if (searchedVal.toLowerCase() === 'All') {
      setRows([...state]);
    } else {
      const filteredRows = state.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    }
  };

  // const handleDateChange = (ranges) => {
  //   console.log(ranges);
  // };

  return (
    <Box id='expensesTable' component='section'>
      <Paper sx={{ p: 3 }}>
        <FormControl sx={{ p: 2, display: 'flex', alignItems: 'flex-end' }}>
          <IconButton
            className='material-symbols-outlined'
            onClick={() => setFiltersOpened((prev) => !prev)}
            sx={{ cursor: 'pointer' }}
          >
            filter_list
          </IconButton>
        </FormControl>

        {filtersOpened && (
          <Box
            sx={{
              display: { mobile: 'grid', desktop: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControl sx={{ mr: 3 }}>
              <InputLabel htmlFor='search-expense'>Find expenses</InputLabel>
              <Input
                id='search-expense'
                type='search'
                placeholder='Search'
                sx={{ px: 2, py: 1 }}
                margin='dense'
                startAdornment={
                  <InputAdornment position='start'>
                    <Icon>
                      <span className='material-symbols-outlined'>search</span>
                    </Icon>
                  </InputAdornment>
                }
                onChange={(e) => filterByName(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '300px', my: 3 }}>
              <InputLabel htmlFor='categorySelect' id='categoryFilter'>
                Category
              </InputLabel>
              <Select
                labelId='categorySelect'
                id='categorySelect'
                value={category}
                label='All'
                onChange={(e) => filterByCategory(e.target.value)}
              >
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value='Food'>Food</MenuItem>
                <MenuItem value='Car'>Car</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
        <TableContainer component={Paper}>
          <Typography variant='h4' sx={{ m: 3 }}>
            Expenses
          </Typography>
          <Table
            stickyHeader
            sx={{ minWidth: { mobile: 300, desktop: 500 }, p: 3 }}
            size='medium'
            aria-label='expenses table'
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h6'>Name</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='h6'>
                    <Icon className='material-symbols-outlined'>category</Icon>
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='h6'>
                    <Icon className='material-symbols-outlined'>calendar_month</Icon>
                  </Typography>
                </TableCell>

                <TableCell align='center'>
                  <Typography variant='h6'>
                    <IconButton className='material-symbols-outlined'>price_check</IconButton>
                    <IconButton
                      data-sort='down'
                      sx={{ fontSize: '1rem' }}
                      // onClick={(e) => handleSortDirection(e)}
                      className='material-symbols-outlined'
                    >
                      arrow_upward
                    </IconButton>
                    <IconButton
                      data-sort='up'
                      sx={{ fontSize: '1rem' }}
                      // onClick={(e) => handleSortDirection(e)}
                      className='material-symbols-outlined'
                    >
                      arrow_downward
                    </IconButton>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    textTransform: 'capitalize',
                    '&:hover': { backgroundColor: '#25d29180' },
                    transition: '.3s ease-out',
                  }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>{row.category}</TableCell>
                  <TableCell align='center'>{row.date}</TableCell>
                  <TableCell align='center'>{row.amount}PLN</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', py: 3 }}>
        {category !== 'All' && category.length > 0 && (
          <Typography variant='h5'>
            Total cost of the {category.toLowerCase()}: {totalCategory}PLN
          </Typography>
        )}
        <Typography variant='h5' sx={{ fontWeight: '800' }}>
          Total expenses: {total}PLN
        </Typography>
      </Box>
    </Box>
  );
}

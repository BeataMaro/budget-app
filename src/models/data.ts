import Expense from './expense.ts';
import Category from './category.ts';

type Data = {
    expenses: Expense[] | never[],
    categories: Category[] | never[]
}

export default Data;

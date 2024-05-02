import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import ExpensesFilter from './components/Filters/ExpensesFilter';
import Chart from './components/Chart/Chart';
import Loader from './components/Loaders/Loader';
import './App.css';
import { fetchExpenses } from './Read'; 

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState('2021');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadExpenses = async () => {
      setIsLoading(true);
      try {
        const loadedExpenses = await fetchExpenses();
        const expensesWithDates = loadedExpenses.map(expense => ({
          ...expense,
          date: new Date(expense.date.seconds * 1000)  
        }));
        setExpenses(expensesWithDates);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
    }
    };

    loadExpenses();
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const chartDataPoints = Array.from({ length: 12 }, (_, index) => {
    return {
      label: new Date(0, index + 1, 0).toLocaleString('en-US', { month: 'short' }),
      value: 0
    };
  });

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
  <div className="app">
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <div className="new-expense-container">
          <NewExpense onAddExpense={addExpenseHandler} />
        </div>
        <div className="chart-container">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <Chart dataPoints={chartDataPoints} />
          <Expenses items={filteredExpenses} />
        </div>
      </>
    )}
  </div>
);
};

export default App;

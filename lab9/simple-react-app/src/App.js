//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Components/Card/card.css'
import './Components/Card/expenses.css'
import Button from './Components/Button/Button.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Diagram from './Components/Diagram/Diagram.jsx';
import Card from './Components/Card/Card.jsx'

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 3, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]);

  const addItem = (name, amount, date) => {
    const newItem = {
      id: Math.random().toString(),
      title: name,
      amount: amount,
      date: new Date(date),
    };
    setExpenses(
      [
        ...expenses,
        newItem
      ]
    );
  }

  const [filteredExpenses, setFilteredList] = useState([{}]);
  const [selectedYear, setYear] = useState(new Date().getFullYear());
  const sortItems = (year) => {
    const selectedYear = parseInt(year);
    const filteredList = expenses.filter(item => item.date.getFullYear() === selectedYear);
    //filteredList.date.getMonth().sort(/*a.date.getMonth(), b.date.getMonth()*/);
    setFilteredList(filteredList);
    setYear(year);
  }

  return (
    <div className="App">
      <h2>My Expenses tempalte</h2>
      <Button handleSubmit={addItem}/>
      <div className="card expenses">
        <Filter sortExpenses={sortItems} expensesList={expenses}/>
        <Diagram expenseItems={expenses} yearToDisplay={selectedYear}/>
        <Card expenseItems={filteredExpenses}/>
        </div>
    </div>
  );
}

export default App;
//<Card expenseItems={filteredExpenses}/>
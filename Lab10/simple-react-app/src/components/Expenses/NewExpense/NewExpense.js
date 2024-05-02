import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import db from '../../../firebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = async (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: Timestamp.fromDate(enteredExpenseData.date)
    };

    try {
      const response = await addDoc(collection(db, 'Expenses'), expenseData);
      console.log('Document written with ID:', response.id);
      setIsAdding(false);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className='new-expense'>
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddingHandler} />
      )}
    </div>
  );
}

export default NewExpense;

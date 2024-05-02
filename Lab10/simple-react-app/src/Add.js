import db from './firebaseConfig';

const addExpense = async (expense) => {
    try {
        const response = await db.collection('expenses').add(expense);
        console.log('Document written with ID: ', response.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

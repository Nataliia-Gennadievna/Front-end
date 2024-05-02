import db from './firebaseConfig';

const updateExpense = async (id, updatedFields) => {
    try {
        await db.collection('expenses').doc(id).update(updatedFields);
        console.log('Document updated');
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};

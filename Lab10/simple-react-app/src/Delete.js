import db from './firebaseConfig';

const deleteExpense = async (id) => {
    try {
        await db.collection('expenses').doc(id).delete();
        console.log('Document successfully deleted!');
    } catch (error) {
        console.error('Error removing document: ', error);
    }
};

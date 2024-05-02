import db from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchExpenses = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'Expenses'));
        const expenses = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return expenses;
    } catch (error) {
        console.error('Error fetching documents: ', error);
        return [];
    }
};

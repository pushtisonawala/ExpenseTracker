// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAy71MbdasxgwpWeI36nNaGFqp3ycOLvS8",
  authDomain: "expense-ef8df.firebaseapp.com",
  projectId: "expense-ef8df",
  storageBucket: "expense-ef8df.firebasestorage.app",
  messagingSenderId: "688366575500",
  appId: "1:688366575500:web:b90838d800bd23b899c0a9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const expensesCollection = collection(db, "expenses");

// Function to add expense to Firestore
export const addExpense = async (expense) => {
  try {
    await addDoc(expensesCollection, expense);
    console.log("Expense added to Firestore!");
  } catch (error) {
    console.error("Error adding expense: ", error);
  }
};

// Function to get expenses from Firestore
export const getExpenses = async () => {
  try {
    const snapshot = await getDocs(expensesCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching expenses: ", error);
    return [];
  }
};


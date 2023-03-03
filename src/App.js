import { useState } from "react";
import "./App.css";
import { ExpenseItem, Expenses, NewExpense } from "./components";

const DUMMY__EXPENSES = [
  {
    id: "1",
    title: "First",
    amount: 94.32,
    date: new Date(2020, 2, 9),
  },
  {
    id: "2",
    title: "Second ",
    amount: 21.12,
    date: new Date(2023, 11, 1),
  },
  {
    id: "3",
    title: "third",
    amount: 34.22,
    date: new Date(2021, 12, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="background">
        <div className="background-color">
          <h2>Let's get Started !</h2>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;

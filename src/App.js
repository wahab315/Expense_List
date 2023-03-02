import "./App.css";
import { ExpenseItem, Expenses, NewExpense } from "./components";

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
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

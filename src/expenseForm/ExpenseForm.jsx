import React from "react";

const ExpenseForm = () => {
  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="text" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
          </div>
          <div className="new-expense__actions">
            <button>Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;

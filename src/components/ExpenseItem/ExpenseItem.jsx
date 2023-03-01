import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../card/Card";

const ExpenseItem = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    // title = "Uppdate !";
    setTitle("Updated !");
    console.log(title);
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}> Clicked</button>
      </Card>
    </>
  );
};

export default ExpenseItem;

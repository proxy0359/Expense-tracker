import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const titleIsValid = enteredTitle.trim().length !== 0;
  const amountIsValid = enteredAmount.trim().length !== 0;
  const dateIsValid = enteredDate.trim().length !== 0;

  const formIsValid = titleIsValid && amountIsValid && dateIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!titleIsValid) {
      setTitleError(true);
    }
    if (!amountIsValid) {
      setAmountError(true);
    }
    if (!dateIsValid) {
      setDateError(true);
    }
    if (!formIsValid) {
      setTitleError(true);
      setAmountError(true);
      setDateError(true);
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpense(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setAmountError(false);
    setDateError(false);
    setTitleError(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          {titleError && <p className="error">Invalid Title</p>}
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          {amountError && <p className="error">Invalid amount</p>}
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          {dateError && <p className="error">Please Enter a date</p>}
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
